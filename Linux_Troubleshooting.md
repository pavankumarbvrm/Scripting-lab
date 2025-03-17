# Troubleshooting Guide:

## Issue 1 : Server Not Reachable or Unable to Connect

1. **Ping the Server by Hostname and IP Address**
   - **If Hostname/IP Address is pingable:**
     - The issue might be on the client side as the server is reachable.

   - **If Hostname is not pingable but IP Address is pingable:**
     - Possible DNS issue. Check the following:
       - `/etc/hosts`
       - `/etc/resolv.conf`
       - `/etc/nsswitch.conf`
       - (Optional) DNS configuration in `/etc/sysconfig/network-scripts/ifcfg-<interface>`

   - **If Hostname/IP Address both are not pingable:**
     - Check another server on the same network:
       - If **False** (issue is specific to the host/server):
         - Investigate the specific server or host.
       - If **True** (overall network-side issue):
         - Escalate or resolve the network-side problem.

2. **Log into the Server Using Virtual Console (if the server is powered on):**
   - Check the server uptime.

3. **Verify Network Configuration:**
   - Check if the server has an IP address assigned and verify the network interface is UP.
     - (Optional) Review IP-related configurations in `/etc/sysconfig/network-scripts/ifcfg-<interface>`.
   - Ping the gateway and review routes.

4. **Check System Configurations:**
   - SELinux settings.
   - Firewall rules.

5. **Inspect Physical Connectivity:**
   - Verify physical cable connections.

## Issue 2 : Unable to Connect to Website or Application

1. **Ping the Server by Hostname and IP Address**
   - **If False:** Refer to the troubleshooting guide for "Server is not reachable or cannot connect."
   - **If True:** Proceed to check service availability.

2. **Check Service Availability Using Telnet Command with Port**
   - **If True:** The service is running, no further action required.
   - **If False:** The service is not reachable or running. Perform the following checks:
     - Verify the service status using `systemctl` or an appropriate command.
     - Inspect firewall and SELinux configurations for restrictions.
     - Review the service logs for errors or warnings.
     - Confirm the correctness of the service configuration.

## Issue 3 : Unable to SSH as Root or Any Other User

1. **Ping the Server by Hostname and IP Address**
   - **If False:** Refer to the troubleshooting guide for "Server is not reachable or cannot connect."
   - **If True:** Proceed to check the SSH service availability.

2. **Check SSH Service Availability Using Telnet Command with Port**
   - **If True:** The SSH service is running. Possible causes:
     - Issue might be on the client side.
     - Verify:
       - User account status (e.g., disabled user).
       - Shell configuration (e.g., `nologin` shell).
       - Root login configuration (e.g., `PermitRootLogin` in `/etc/ssh/sshd_config`).
       - Other related configurations.

   - **If False:** The SSH service is not reachable or running. Perform the following checks:
     - Check the SSH service status using `systemctl` or an appropriate command.
     - Inspect firewall and SELinux configurations for restrictions.
     - Review SSH service logs for errors or warnings.
     - Confirm the correctness of SSH service configuration in `/etc/ssh/sshd_config`.

## Issue 4 : Disk Space Full or Adding/Extending Disk Space

### 1. **System Performance Degradation Detection**
   - Symptoms include:
     - Applications becoming slow or unresponsive.
     - Commands failing to execute (e.g., due to full disk space).
     - Logging and other operations failing.

### 2. **Analyze the Issue**
   - Use the `df` command to identify the problematic filesystem with space issues.

### 3. **Actions to Resolve Disk Space Issues**
   - After identifying the specific filesystem:
     - Use the `du` command within the filesystem to locate large files or directories.
     - Compress or remove large files as needed.
     - Move items to another partition or server to free up space.
     - Check disk health using the `badblocks` command:
       - Example: `badblocks -v /dev/sda`
     - Identify IO-bound processes using the `iostat` command.
     - Create a link to the file or directory to offload space.

### 4. **Adding a New Disk**
#### **For Simple Partitions:**
   1. Add a new disk to the VM.
   2. Check the new disk using the `df` or `lsblk` command.
   3. Use `fdisk` to create a partition (preferably LVM partition).
   4. Create a filesystem and mount it.
   5. Add an entry in `/etc/fstab` for persistence across reboots.

#### **For LVM Partitions:**
   1. Add a new disk to the VM.
   2. Check the new disk using the `df` or `lsblk` command.
   3. Use `fdisk` to create an LVM partition.
   4. Perform the following:
      - Create a Physical Volume (PV).
      - Create a Volume Group (VG).
      - Create a Logical Volume (LV).
   5. Create a filesystem and mount it.
   6. Add an entry in `/etc/fstab` for persistence.

### 5. **Extending an LVM Partition**
   1. Add a new disk and create an LVM partition.
   2. Add the LVM partition (PV) to an existing Volume Group (VG).
   3. Extend the Logical Volume (LV) and resize the filesystem.

## Issue 5 : Filesystem Corrupted

1. **Identify the Problem**
   - One common symptom is the system being unable to boot up.

2. **Check Logs** Boot into Rescue Mode
   - Review the following log files for clues:
     - `/var/log/messages`
     - `dmesg`
     - Other relevant log files.

3. **Look for Bad Sector Logs**
   - If bad sector logs are identified, proceed with `fsck` to repair the filesystem.

4. **Run `fsck` to Repair the Filesystem**
   - Steps:
     1. Reboot the system into **rescue mode**:
        - Boot the system from a CDROM by applying an ISO image.
     2. When prompted, select **Option 1**, which mounts the original root filesystem under `/mnt/sysimage`.
     3. Edit the `/etc/fstab` entries if required, or create a new file using `blkid` to identify disk partitions.
     4. Reboot the system to apply the changes.

## Issue 6 : Missing or Bad Entry in `/etc/fstab`

1. **Identify the Problem**
   - Missing or incorrect entries in `/etc/fstab` can prevent the system from booting properly.

2. **Check Logs**
   - Review the following logs for relevant errors (if accessible):
     - `/var/log/messages`
     - `dmesg`

3. **Run `fsck` to Repair the Filesystem (if bad sector logs are present)**
   - If bad sectors are found, proceed with filesystem repair:
     1. Reboot the system into **rescue mode**:
        - Boot the system from a CDROM or ISO image.
     2. When prompted, choose **Option 1** to mount the original root filesystem under `/mnt/sysimage`.

4. **Fix or Recreate `/etc/fstab`**
   - Steps:
     1. Access the mounted filesystem in rescue mode:
            chroot /mnt/sysimage
     2. Use the `blkid` command to identify the disk partitions and their UUIDs:
            blkid
     3. Edit or recreate the `/etc/fstab` file with correct entries. Example format:
        UUID=<partition-UUID> <mount-point> <filesystem-type> <options> <dump> <pass>        
            Example:
            UUID=1234-5678-90AB / ext4 defaults 1 1        
     4. Save the file and exit rescue mode.

5. **Reboot the System**
   - Restart the system and verify successful boot.

---

### Additional Notes
- Always back up the `/etc/fstab` file before making changes.
- Test `/etc/fstab` changes before rebooting using:
    mount -a 

## Issue 7 : Unable to `cd` to Directory Even with Sudo Privileges 

### 1. **Identify the Problem**  
   - Ensure the directory exists and the user is using the correct path.  

### 2. **Possible Reasons and Resolutions**  

#### **1. Directory Does Not Exist**  
   - Verify the directory's existence:  
         ls -ld <directory-path>
   - If it doesn’t exist, create the directory if required:  
         sudo mkdir -p <directory-path>

#### **2. Pathname Conflict: Relative vs Absolute Path**  
   - Ensure the user is using the correct absolute path to the directory:  
        cd /full/path/to/directory
   - Avoid ambiguous relative paths like `../directory`.  

#### **3. Parent Directory Permission/Ownership**  
   - Check permissions and ownership of parent directories:  
        ls -ld <parent-directory>
   - Ensure the user has at least `execute` (`x`) permission on all parent directories. Adjust permissions if necessary:  
        sudo chmod +x <parent-directory>
        sudo chown <user>:<group> <parent-directory>

#### **4. Missing Execute Permission on Target Directory**  
   - Verify the directory permissions:  
         ls -ld <directory-path>
   - If the `x` (execute) permission is missing, add it:  
         sudo chmod +x <directory-path>

#### **5. Hidden Directory**  
   - Ensure the directory is not hidden (directories starting with a `.`). Use:  
        ls -ld .* <parent-directory>
   - If it’s hidden, include the `.` in the path or make it visible by renaming:  
        mv .<directory-name> <directory-name>

---

### Additional Notes  
- Even with `sudo` privileges, the user needs the correct permissions to access the directory directly unless explicitly using `sudo` for the command.  
- Always verify the path and permissions for accuracy.  

## Issue 8 : Unable to Create Links  

### 1. **Identify the Problem**  
   - Confirm the type of link being created:
     - **Soft Link (Symbolic Link)**: Points to another file or directory.
     - **Hard Link**: Points to the data of an existing file (not applicable for directories).  

---

### 2. **Possible Reasons and Resolutions**  

#### **1. Target Directory/File Does Not Exist**  
   - Verify the target file or directory exists:  
        ls -l <target-path>
   - If it doesn’t exist, create the file or directory if required:  
        touch <file-path>   # For file
        mkdir -p <directory-path>   # For directory

#### **2. Pathname Conflict: Relative vs Absolute Path**  
   - Use the absolute path for both the target and the link:  
        ln -s /full/path/to/target /full/path/to/link
   - Avoid ambiguous relative paths like `../target`.  

#### **3. Parent Directory Permission/Ownership**  
   - Check permissions and ownership of the parent directory where the link will be created:  
        ls -ld <parent-directory>
   - Ensure the user has write (`w`) and execute (`x`) permissions on the parent directory. Adjust permissions if necessary:  
        sudo chmod +wx <parent-directory>
        sudo chown <user>:<group> <parent-directory>

#### **4. Target File Permission/Ownership**  
   - Check if the target file has read (`r`) permissions, as it’s necessary for creating a link:  
        ls -l <target-file>
   - Adjust permissions if required:  
        sudo chmod +r <target-file>
        sudo chown <user>:<group> <target-file>

#### **5. Hidden Directory/File**  
   - Ensure the target is not a hidden file or directory (starting with a `.`). Use:  
        ls -la <parent-directory>
   - If hidden, include the `.` in the path or rename it to make it visible:  
        mv .<name> <name>

---

### 3. **Creating Links: Examples**  

#### **1. Creating a Soft Link**  
   - Syntax:  
        ln -s /path/to/target /path/to/link
   - Example:  
        ln -s /usr/local/bin/myfile ~/myfile-link

#### **2. Creating a Hard Link**  
   - Syntax:  
        ln /path/to/target /path/to/link
   - Example:  
        ln /var/log/syslog ~/syslog-link

---

### Additional Notes  
- Soft links can point to non-existent files or directories but will break if the target is missing.  
- Hard links require the target file to exist and cannot cross filesystem boundaries.  

## Issue 9 : Running Out of Memory  

---

### 1. **Types of Memory**  

#### **1. Cache (L1, L2, L3)**  
   - High-speed storage close to the CPU, not user-manageable.  

#### **2. RAM (Physical Memory)**  

##### **Usage Details**  
   - Use the `free -h` command to check memory usage:  
        free -h
     Output:  
     - **Total**: Total assigned physical memory.  
     - **Used**: Total actual used memory.  
     - **Free**: Actual free memory.  
     - **Shared**: Shared memory.  
     - **Buff/Cache**: Pages cache memory.  
     - **Available**: Memory that can be freed.  

##### **Check Memory Info**  
   - Inspect `/proc/meminfo` for detailed memory stats:  
         cat /proc/meminfo
     Key entries:  
     - **File Active**: Active file pages in memory.  
     - **File Inactive**: Inactive file pages in memory.  
     - **Anon Active**: Active anonymous pages in memory.  
     - **Anon Inactive**: Inactive anonymous pages in memory.  

#### **3. Swap (Virtual Memory)**  
   - Swap acts as an overflow for RAM and stores infrequently used memory pages.

---

### 2. **Resolution Steps**  

#### **1. Identify High Memory Usage**  
   - Use tools to identify memory-hungry processes:  
        top  
        htop  
        ps aux --sort=-%mem

#### **2. Check Out-of-Memory (OOM) Logs**  
   - Inspect logs for OOM events:  
         grep -i "out of memory" /var/log/messages
   - Check if memory commitment is enabled in `/etc/sysctl.conf`.  

#### **3. Kill or Restart Processes/Services**  
   - To stop a memory-intensive process:  
        kill -9 <PID>

#### **4. Prioritize Critical Processes**  
   - Use `nice` to adjust process priority:  
        nice -n <priority> <command>

#### **5. Add or Extend Swap Space**  
   - Check current swap usage:  
        swapon --show
   - Add a swap file if needed:  
        sudo fallocate -l <size> /swapfile
        sudo chmod 600 /swapfile
        sudo mkswap /swapfile
        sudo swapon /swapfile
   - Make it persistent by adding to `/etc/fstab`:  
        /swapfile swap swap defaults 0 0

#### **6. Add More Physical RAM**  
   - Upgrade the physical memory if resource constraints persist.  

---

### Additional Notes  
- Monitor memory usage regularly using tools like `vmstat` or graphical utilities.  
- Configure alerting mechanisms for proactive resource management.  

## Issue 10 : Add/Extend the Swap Space  

---

### 1. **When to Add or Extend Swap Space**  
   - Running out of memory due to high memory usage can lead to system performance degradation or crashes. In such cases, adding or extending swap space provides a temporary solution by using disk space for virtual memory.

---

### 2. **Steps to Add/Extend Swap Space**  

#### **1. Create a Swap File**  
   - Use the `dd` command to create a swap file (replace `<size>` with the desired swap file size, e.g., `2G` for 2 GB):  
         sudo dd if=/dev/zero of=/swapfile bs=1M count=<size-in-MB>
            - Example for a 2 GB swap file:  
                sudo dd if=/dev/zero of=/swapfile bs=1M count=2048

#### **2. Set Permissions for the Swap File**  
   - Set the appropriate permissions to protect the swap file and ensure only root can access it:  
        sudo chmod 600 /swapfile
        sudo chown root:root /swapfile

#### **3. Format the Swap File**  
   - Use the `mkswap` command to set up the swap space:  
         sudo mkswap /swapfile

#### **4. Enable the Swap Space**  
   - Turn on the swap space:  
        sudo swapon /swapfile

#### **5. Make the Swap Space Persistent**  
   - To ensure the swap space is available after reboot, add the swap file entry to `/etc/fstab`:  
         sudo echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
---

### 3. **Verify Swap Space**  
   - Confirm the swap is active and available:  
        swapon --show
        free -h
---

### 4. **Additional Notes**  
   - Swap space is slower than RAM, so adding physical RAM is a better long-term solution for performance.  
   - Consider extending swap space only when RAM resources are insufficient, as excessive reliance on swap can degrade system performance.  

## Issue 11: Unable to Run Certain Commands  

---

### 1. **Troubleshooting and Resolution**  

#### **1. Command Type**  
   - **System Command**: Certain system commands may not be accessible to non-root users due to insufficient permissions.  
   - **User Defined Script/Command**: Could be custom scripts or commands that require specific permissions or paths.

#### **2. Troubleshooting Steps**  

##### **1. Check Permission and Ownership of the Command/Script**  
   - Ensure the user has the necessary permissions to execute the command or script:  
         ls -l /path/to/command_or_script
   - Modify permissions if necessary:  
         sudo chmod +x /path/to/command_or_script

##### **2. Verify `sudo` Permission**  
   - Ensure the user has `sudo` access to run the command. Check the `/etc/sudoers` file or use `visudo` to add necessary permissions.  
   - Example to allow a user to run specific commands as sudo:  
         <user> ALL=(ALL) NOPASSWD: /path/to/command

##### **3. Absolute vs Relative Path**  
   - Ensure that the correct path is used to execute the command. If using a relative path, check if you are in the right directory.  
   - Use the absolute path of the command/script to avoid confusion:  
         /path/to/command

##### **4. Check `PATH` Variable**  
   - Ensure the command/script is in the system’s `PATH` variable. If it’s not, either move the command/script to a directory in `PATH` or update the `PATH` variable:  
         echo $PATH
         export PATH=$PATH:/path/to/command_or_script

##### **5. Verify Command Installation**  
   - Ensure the command is installed. Check with the package manager (e.g., `apt`, `yum`, `dnf`, `brew`, etc.).  
   - Example to check if a command is installed:  
         which <command>

##### **6. Check for Missing or Deleted Libraries**  
   - Some commands may rely on external libraries. Check if any required libraries are missing or deleted. Use `ldd` for binary commands to see dependencies:  
         ldd /path/to/command
---

### 2. **Additional Notes**  
   - If the command/script is located in a non-standard directory, ensure the directory is part of the system's `PATH`.  
   - For system-related commands, users might need to be part of specific groups or granted elevated privileges.  

## Issue 12 : System Unexpectedly Reboots and Process Restarts
---

### 1. **System Reboot/Crash Reasons**

#### **1. Common Causes of System Reboot/Crash**  
   - **CPU Stress**: High CPU usage can cause the system to become unresponsive, leading to a reboot or crash.  
   - **RAM Stress**: Excessive memory usage, leading to system instability.  
   - **Kernel Fault**: Kernel panics due to bugs or issues within the core operating system.  
   - **Hardware Fault**: Hardware-related failures (e.g., failing hard drives, overheating).  

---

### 2. **Process Restart Causes**

#### **1. Reasons for Process Restarts**  
   - **System Reboot**: A full system reboot may trigger processes to restart automatically.  
   - **Watchdog Application**: If a system process or application exceeds resource limits, a watchdog can restart or terminate the process to prevent further stress on the system.  
   - **Automatic Restart**: The system may restart a process based on pre-configured settings or health checks.  

---

### 3. **Troubleshooting Steps**

#### **1. Check System Status**  
   - After logging into the system, use the following commands to check the status of the system and processes:  
     - `uptime`: Check the system uptime and whether there was an unexpected reboot.  
     - `top`: Monitor real-time system resource usage and identify heavy processes.  
     - `dmesg`: Check for kernel-related logs and any hardware-related issues.  
     - `journalctl`: View logs and system events that occurred before the reboot.  
     - `iostat -xz 1`: Check for I/O performance issues and disk-related problems.  

#### **2. Review Log Files**  
   - Check system logs for relevant entries:  
     - `syslog.log`: General system logs.  
     - `boot.log`: Logs related to the boot process.  
     - `dmesg`: Kernel logs (detailed output).  
     - `messages.log`: Logs for general system messages and errors.  
   - For application-specific logs, check the custom log path for any application-related issues that may have caused the restart.  

#### **3. Use Virtual Console Access**  
   - If you are unable to access the system normally, use the virtual console (via ILO, IDRAC, etc.) to gain access and check for critical logs and errors.  

#### **4. Contact Vendor Support**  
   - If the issue persists and seems related to hardware or other vendor-specific problems, open a support case with the hardware or software vendor.  

---

### 4. **Additional Notes**  
   - Investigate hardware performance issues such as overheating, disk failure, or memory problems, which can cause the system to unexpectedly reboot.  
   - Review resource usage patterns over time, which could help identify any resource-hogging processes or misconfigurations.  

## Issue 13 : Unable to Get IP Address  
---

### 1. **IP Assignment Methods**  

#### **1. DHCP (Dynamic Host Configuration Protocol)**  
   - **Fixed Allocation**: IP addresses are assigned by the DHCP server based on MAC address, ensuring the same IP address is assigned to the same device each time.  
   - **Dynamic Allocation**: IP addresses are dynamically assigned from a pool by the DHCP server. The IP address may change upon each reboot or connection.  

#### **2. Static IP**  
   - The IP address is manually configured and does not change unless modified.  

---

### 2. **Troubleshooting Steps**  

#### **1. Check Network Settings from Virtualization Environment**  
   - If the system is running in a virtualized environment (e.g., VMware, VirtualBox), ensure that the virtual machine’s network adapter is correctly configured.  
     - Check if the VM network adapter is set to "Bridged" or "NAT" based on the desired network behavior.  
     - Ensure that the virtual switch and network settings are properly configured to allow network connectivity.  

#### **2. Verify IP Address Assignment**  
   - Check if an IP address has been assigned by running the following command:  
         ip a
     - Alternatively, you can use `ifconfig` if it's available on the system.  

#### **3. Check NIC Status from Host Side**  
   - From the host machine, use the following commands to check the status of the network interface:  
     - `lspci`: List all PCI devices, including the network interface cards (NICs).  
     - `nmcli`: Network Manager CLI tool to check the status of network connections.  

#### **4. Restart Network Service**  
   - Try restarting the network service to reinitialize the networking components:  
         sudo systemctl restart network
   - Alternatively, you can restart the networking service based on the system's configuration:  
        sudo service networking restart

---

### 3. **Additional Notes**  
   - Ensure that no IP address conflicts are occurring within the network (i.e., two devices using the same IP address).  
   - For DHCP issues, ensure that the DHCP server is functioning properly and is reachable from the client machine.  
   - For static IP issues, verify that the correct network configuration is set in `/etc/network/interfaces` or equivalent configuration files depending on the system (e.g., `/etc/netplan/*.yaml` for Ubuntu).  

## Issue 14 : Backup and Restore File Permissions in Linux  
---

### 1. **Troubleshooting Steps**  

#### **1. Create Backup of File Permissions Before Making Changes**  
   - Before making bulk permission changes, it's a good practice to create a backup of the current file and directory ACLs (Access Control Lists).  
   - To backup permissions of a directory or files, use the following command to create an ACL file:  
        getfacl -R <dir> > permissions.acl
            This will recursively get the ACL of the directory (`<dir>`) and save it to a file called `permissions.acl`.  

#### **2. Restore File Permissions**  
   - If file or directory permissions need to be restored, use the `setfacl` command to apply the saved ACL from the backup:  
         setfacl --restore=permissions.acl
             This will restore the permissions to their previous state based on the saved `permissions.acl` file.

#### **3. Restore from VM Snapshot**  
   - If a virtual machine snapshot was taken before making permission changes, it can be restored to revert the system back to its prior state.  
   - **Note**: Restoring from a VM snapshot may not always be the best option for production environments, as it can affect other system states, not just file permissions.

#### **4. Rebuild the VM**  
   - In cases where other options are not feasible or to ensure long-term safety, rebuilding the VM may be the best option to start fresh.  
   - **Note**: This option is generally safe for the future, as it ensures a clean system state without residual issues.

---

### 2. **Additional Notes**  
   - **ACL Files**: ACLs allow for more granular control over file permissions than traditional user/group/other modes. Using `getfacl` and `setfacl` ensures that you can handle permissions with precision.  
   - **Snapshot Restoration**: While restoring from a snapshot may be quick, it is important to verify that no other system states (like running processes or system updates) are inadvertently reverted.  
   - **VM Rebuild**: Rebuilding the VM is a last-resort option, often used when other solutions (like ACL backups or snapshot restoration) are impractical or insufficient for the situation.

# Linux Process Management and Troubleshooting Guide

## Overview

In Linux, processes are instances of executing programs that are managed by the operating system. Each process has a unique PID (Process ID) and is associated with certain resources, such as CPU time, memory, and file descriptors. This guide covers the different types of processes, states, and troubleshooting steps for managing processes.

---

## Process Types in Linux

### 1. Running Processes
- Processes that are currently executing and utilizing system resources like CPU and memory.

### 2. Zombie Processes
- **Zombie processes** (also called defunct processes) have completed execution, but their exit status has not been read by the parent process.

### 3. Orphan Processes
- **Orphan processes** are child processes whose parent has terminated. These processes are adopted by the `init` process (PID 1).

### 4. Daemon Processes
- **Daemon processes** run in the background and usually do not interact with users. Typically, services such as web servers or database servers.

### 5. Interactive Processes
- **Interactive processes** involve user interaction, such as terminal sessions or graphical user interfaces.

---

## Process States

Each process in Linux has a state that indicates its current condition. Common process states include:

- **R** (Running): The process is either running or ready to run.
- **S** (Sleeping): The process is waiting for an event or condition (e.g., I/O operations).
- **Z** (Zombie): The process has finished execution, but its parent has not read its exit status.
- **T** (Stopped): The process has been stopped, usually by a signal.
- **I** (Idle): The process is in an idle state (typically only seen in kernel threads).
- **D** (Uninterruptible sleep): The process is in an uninterruptible sleep state, often waiting on I/O operations.

---

## Process Management Commands

### 1. Viewing Processes
- `ps`: Displays information about running processes.
  ```bash
  ps aux      # List all processes
  ps -ef      # Another format for listing processes
  ps -u <user> # List processes for a specific user

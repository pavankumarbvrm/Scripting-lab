### 1). Optimize cd with CDPATH
        Set CDPATH to a parent directory for easier navigation to its subdirectories:

        # Without CDPATH
        pwd
        /home/ramesh
        cd mail
        # Error: No such file or directory

        # With CDPATH
        export CDPATH=/etc
        cd mail
        # Now automatically navigates to /etc/mail
        pwd
        /etc/mail

        Tip: Use CDPATH to skip typing the parent directory each time.

### 2). Auto-Correct cd Typos with shopt -s cdspell
        Enable typo correction for the cd command:

        # Without cdspell
        cd /etc/mall
        # Error: No such file or directory

        # Enable cdspell
        shopt -s cdspell
        cd /etc/mall
        # Auto-corrects to /etc/mail
        pwd
        /etc/mail

        Tip: Great for minimizing errors in navigation!        

### 3). Search and Filter Text in Files Using grep

        Find lines matching a keyword:        grep John /etc/passwd

        Exclude matching lines (-v):          grep -v John /etc/passwd

        Count matching lines (-c):            grep -c John /etc/passwd

        Count non-matching lines (-cv):       grep -cv John /etc/passwd

        Ignore case while searching (-i):     grep -i john /etc/passwd

        Search recursively in subdirectories (-r):  grep -ri john /home/users

        List only matching filenames (-l):    grep -ril john /home/users

### 4). Using Regular Expressions with grep

        Beginning of Line (^):
            Match lines starting with a pattern:    grep "^Nov 10" messages.1

        End of Line ($):
            Match lines ending with a pattern:      grep "terminating.$" messages

        Empty Lines (^$):
            Count empty lines in a file:            grep -c "^$" messages anaconda.log

        Single Character (.):
            Match any character except the end-of-line:     grep ".ello" input

        Zero or More Occurrences (*):
            Match zero or more occurrences of the preceding character:  grep "kernel: *." messages.4            

### 5). Practical Examples of the find Command

        Find files containing a specific word in their name:    find /etc -name "*mail*"

        Find files larger than a certain size:          find / -type f -size +100M

        Find files not modified in the last X days:     find . -mtime +60

        Find files modified in the last X days:         find . -mtime -2

        Delete archive files (*.tar.gz) larger than 100MB:
            First, verify the files:    find / -type f -name "*.tar.gz" -size +100M -exec ls -l {} \;

            Then, delete them:          find / -type f -name "*.tar.gz" -size +100M -exec rm -f {} \;

        Archive files not modified in the last X days:
            Create a tar archive of files older than 60 days:

                find /home/jsmith -type f -mtime +60 | xargs tar -cvf /tmp/$(date '+%d%m%Y')_archive.tar

        Tip: Always verify files using ls before performing actions like deletion!

### 6). Suppressing Output in Shell Scripts

        Suppress Standard Output:
            Redirect standard output to /dev/null to hide normal messages.

                cat file.txt > /dev/null
                ./shell-script.sh > /dev/null

        Suppress Standard Error:
            Redirect standard error to /dev/null to hide error messages.

                cat invalid-file-name.txt 2> /dev/null
                ./shell-script.sh 2> /dev/null

        Suppress Both Standard Output and Standard Error:
            Combine redirections to hide all output (useful for cron jobs).

                command > /dev/null 2>&1

        Tip: Useful for debugging or keeping logs clean in automation tasks!

### 7). Using the join Command

        The join command merges lines from two files based on a common field.
            Example

            Input Files:
                employee.txt

                100 Jason Smith
                200 John Doe
                300 Sanjay Gupta
                400 Ashok Sharma

                bonus.txt

                100 $5,000
                200 $500
                300 $3,000
                400 $1,250

        Command:    join employee.txt bonus.txt

            Output:

            100 Jason Smith $5,000
            200 John Doe $500
            300 Sanjay Gupta $3,000
            400 Ashok Sharma $1,250

        Tip: Ensure both files are sorted by the common field before using join. Use sort if needed:

            sort employee.txt -o employee.txt
            sort bonus.txt -o bonus.txt

### 8). Converting Case in Files
        
        Use the tr command to transform all lowercase letters (a-z) to uppercase (A-Z).
        Convert a File to Uppercase:    tr a-z A-Z < employee.txt

                Input (employee.txt):

                100 Jason Smith
                200 John Doe
                300 Sanjay Gupta
                400 Ashok Sharma

                Output:

                100 JASON SMITH
                200 JOHN DOE
                300 SANJAY GUPTA
                400 ASHOK SHARMA

        Convert a File to Lowercase:    tr A-Z a-z < department.txt

### 9). Practical Examples of xargs Usage
xargs is a very powerful command that takes output of a command and pass it as argument of another command.

        Avoid "Argument list too long" Error:
            Use xargs to handle a large number of files safely.

            find ~ -name '*.log' -print0 | xargs -0 rm -f

                find: Searches for files and directories.
                ~: Refers to the home directory of the current user.
                -name '*.log': Finds files with names ending in .log.
                -print0: Outputs the results as a null-terminated list (separates filenames with \0 instead of newlines). This is crucial for handling filenames with spaces or special characters safely.
                xargs -0

                xargs: Takes the input from the previous command and passes it as arguments to another command (rm in this case).
                -0: Specifies that the input is null-terminated (matches the -print0 output of find).

    Why Use -print0 and -0?

        To handle filenames with spaces or special characters.
        Without these options, filenames like log file 1.log would be misinterpreted as multiple arguments, leading to errors.

        List Details of Configuration Files:
            Pass the output of find to ls -l to list all .conf files under /etc.

                find /etc -name "*.conf" | xargs ls -l

        Download Files from a URL List:
            Use xargs with wget to download URLs from a file.

                cat url-list.txt | xargs wget -c

        Archive All .jpg Images:
            Find and archive all .jpg files into a tarball.

                find / -name "*.jpg" -type f -print | xargs tar -cvzf images.tar.gz

        Copy Images to an External Drive:
            Use xargs to copy .jpg files to a specified directory.

                ls *.jpg | xargs -n1 -i cp {} /external-hard-drive/directory

### 10). The sort command in Linux is used to arrange the lines of a text file or the output of a command in a specified order. Below is an explanation of the examples provided for using sort effectively:

Key Options for sort Command:

    -t: Defines the delimiter (e.g., -t: for colon).
    -k: Specifies the field to sort by (e.g., -k 2 for sorting by the second field).
    -n: Sorts numerically.
    -r: Sorts in reverse (descending) order.
    -u: Removes duplicate lines.

Sorting a Text File in Ascending Order: By default, sort arranges the lines in ascending order based on alphabetical order.

        Example:

        $ sort names.txt

        Output:

        Alex Jason:200:Sales
        Emma Thomas:100:Marketing
        Madison Randy:300:Product Development
        Nisha Singh:500:Sales
        Sanjay Gupta:400:Support

    This sorts the file in ascending order, alphabetically by the first character in each line.

Sorting a Text File in Descending Order: To sort in reverse order, use the -r option.

    Example:    $ sort -r names.txt

Sorting a Colon-Delimited File by the 2nd Field (Employee ID)

If your file is delimited by a specific character (e.g., colon :), you can use the -t option to specify the delimiter and -k to specify the field to sort by.

Example:    $ sort -t: -k 2 names.txt => This sorts the file by the second field (employee ID).

Output:

    Emma Thomas:100:Marketing
    Alex Jason:200:Sales
    Madison Randy:300:Product Development
    Sanjay Gupta:400:Support
    Nisha Singh:500:Sales

Sorting a Colon-Delimited File and Suppressing Duplicates: To remove duplicate entries based on a particular field, you can use the -u option.

    Example:    $ sort -t: -u -k 3 names.txt => This sorts the file by the third field (department name) and removes duplicate  department names.

Output:

Emma Thomas:100:Marketing
Madison Randy:300:Product Development
Alex Jason:200:Sales
Sanjay Gupta:400:Support

Sorting the /etc/passwd File by the Numeric User ID (3rd Field): The -n option is used to sort numerically.

Example:    $ sort -t: -k 3n /etc/passwd | more => This sorts the file by the third field (numeric user ID) in ascending order.

    Output:
        root:x:0:0:root:/root:/bin/bash
        bin:x:1:1:bin:/bin:/sbin/nologin
        daemon:x:2:2:daemon:/sbin:/sbin/nologin
        adm:x:3:4:adm:/var/adm:/sbin/nologin
        lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin

Sorting /etc/hosts by IP Address: You can sort based on individual segments of an IP address using the -k option with multiple fields.

    Example:

    $ sort -t . -k 1,1n -k 2,2n -k 3,3n -k 4,4n /etc/hosts =>This sorts the file by the IP address, segment by segment, in ascending numerical order.

    Output:

    127.0.0.1 localhost.localdomain localhost
    192.168.100.101 dev-db.thegeekstuff.com dev-db
    192.168.100.102 prod-db.thegeekstuff.com prod-db
    192.168.101.20 dev-web.thegeekstuff.com dev-web
    192.168.101.21 prod-web.thegeekstuff.com prod-web


Combining sort with Other Commands.

    Sort Process List Output:

        ps –ef | sort   =>    Sorts the list of processes in ascending order.

    Sort Files by File Size (Ascending Order):

        ls -al | sort +4n   =>  Lists files in ascending order of their size (5th column).

    Sort Files by File Size (Descending Order):

        ls -al | sort +4nr  =>  Lists files in descending order of their size (5th column).

### 11). Uniq Command
    The uniq command in Linux is used to filter out duplicate lines from a file or stream of input. It works by identifying and removing consecutive duplicate lines, which is why it is often used in combination with the sort command to ensure all duplicates are adjacent.

    Key Options for uniq:

    -c: Counts the number of occurrences of each line and displays the count before the line.
    -d: Displays only the lines that are repeated (duplicates).
    -u: Displays only the lines that are unique (not duplicated).

    1. Remove Duplicate Entries from a Sorted File

        To remove duplicate lines from a file, you first need to sort the file (as uniq only removes adjacent duplicates). After sorting, you can pipe the result into uniq to get only the unique entries.

    Example:

    $ sort namesd.txt | uniq

        This will output the lines from namesd.txt with duplicates removed.

    Alternatively, you can use sort -u, which sorts and removes duplicates in a single step:

    $ sort -u namesd.txt

    2. Count the Number of Duplicate Lines

        If you want to know how many times a line appears, you can use the -c option. This option tells uniq to prefix each unique line with a count of how many times it appears.

    Example:

        $ sort namesd.txt | uniq -c

    Output:

        2 Alex Jason:200:Sales
        2 Emma Thomas:100:Marketing
        1 Madison Randy:300:Product Development
        1 Nisha Singh:500:Sales
        1 Sanjay Gupta:400:Support

        In this case, Alex Jason:200:Sales and Emma Thomas:100:Marketing appear twice, while the other lines appear only once.

    3. Display Only Duplicate Entries

        If you want to display only the lines that are duplicates (those appearing more than once), use the -d option in combination with -c.

    Example:

    $ sort namesd.txt | uniq -cd

    Output:

    2 Alex Jason:200:Sales
    2 Emma Thomas:100:Marketing

    This command shows only the lines that appear more than once, along with the count of their occurrences.

### 12). Cut Command

The cut command in Linux is used to extract specific columns or sections from a file or command output. It's commonly used for working with delimited text files or structured data. Below are several examples that demonstrate how to use the cut command effectively.
Key Options for cut:

    -d: Specifies the delimiter (e.g., : for colon-delimited files).
    -f: Specifies the field numbers to display.
    -c: Specifies the character positions to display.

1. Display the 1st Field (Employee Name) from a Colon-Delimited File

    The -d: option specifies the delimiter (colon in this case), and the -f 1 option tells cut to display the first field.

        Example:    $ cut -d: -f 1 names.txt

        Output:

        Emma Thomas
        Alex Jason
        Madison Randy
        Sanjay Gupta
        Nisha Singh

    This command extracts and displays the employee names (the first field) from the names.txt file.

2. Display the 1st and 3rd Fields from a Colon-Delimited File

    You can specify multiple fields using a comma to separate them (e.g., -f 1,3 for the first and third fields).

        Example:    $ cut -d: -f 1,3 names.txt

        Output:

        Emma Thomas:Marketing
        Alex Jason:Sales
        Madison Randy:Product Development
        Sanjay Gupta:Support
        Nisha Singh:Sales

    This command extracts and displays the first and third fields (employee name and department) from the names.txt file.

3. Display Only the First 8 Characters of Every Line in a File

    Use the -c option to specify character positions to display a portion of each line, rather than fields.

        Example:    $ cut -c 1-8 names.txt

        Output:

        Emma Tho
        Alex Jas
        Madison
        Sanjay G
        Nisha Si

    This command extracts the first 8 characters from each line in the file.

Miscellaneous cut Command Examples

    Display the Unix Login Names for All Users:     $ cut -d: -f1 /etc/passwd

This extracts and displays the usernames (login names) from the /etc/passwd file, which contains user information in a colon-delimited format.

    Display the Total Memory Available on the System:
        $ free | tr -s ' ' | sed '/^Mem/!d' | cut -d" " -f2

This command chain does the following:

    free: Shows memory usage information.
    tr -s ' ': Replaces multiple spaces with a single space.
    sed '/^Mem/!d': Filters the output to only include the line starting with "Mem" (total memory line).
    cut -d" " -f2: Extracts the second field (the total memory value).

### 13). Stat Command
The stat command in Linux is used to display detailed information about files, directories, and filesystems. It provides information such as file size, inode number, access rights, and timestamps. Below are some examples of how to use the stat command for both files and filesystems.

1. Display Statistics of a File or Directory

To display the status and properties of a file or directory, use the stat command followed by the file or directory path.

Example for a file: $ stat /etc/my.cnf

    Output:

    File: `/etc/my.cnf'
    Size: 346        Blocks: 16         IO Block: 4096   regular file
    Device: 801h/2049d  Inode: 279856     Links: 1
    Access: 2009-01-01 02:58:30.000000000 -0800
    Modify: 2006-06-01 20:42:27.000000000 -0700
    Change: 2007-02-02 14:17:27.000000000 -0800

Explanation of output:

    Size: The size of the file in bytes.
    Blocks: The number of blocks allocated for the file.
    IO Block: The size of the block for input/output operations.
    Device: The device ID where the file is stored.
    Inode: The inode number, which uniquely identifies the file.
    Links: The number of hard links pointing to the file.
    Access/Modify/Change: Timestamps for when the file was last accessed, modified, and when its metadata changed.
    Uid/Gid: The user and group owning the file.

Example for a directory:

    $ stat /home/ramesh

    Output:

    File: `/home/ramesh'
    Size: 4096       Blocks: 8          IO Block: 4096   directory
    Device: 803h/2051d  Inode: 5521409   Links: 7
    Access: 2009-01-01 12:17:42.000000000 -0800
    Modify: 2009-01-01 12:07:33.000000000 -0800
    Change: 2009-01-09 12:07:33.000000000 -0800

Explanation:

    Size: The size of the directory, which is usually 4096 bytes.
    Blocks: The number of blocks allocated for the directory.
    IO Block: The input/output block size for the directory.
    Links: The number of hard links to the directory, including . (itself) and .. (parent directory).
    Access/Modify/Change: Timestamps for the directory's last access, modification, and metadata change.

2. Display the Status of the Filesystem

To check the statistics of the filesystem where a file or directory is located, use the -f option with the stat command.

Example:    $ stat -f /

    Output:

    File: "/"
    ID: 0        Namelen: 255    Type: ext2/ext3
    Blocks: Total: 2579457  Free: 2008027  Available: 1876998  Size: 4096
    Inodes: Total: 1310720  Free: 1215892

Explanation of output:

    ID: The filesystem ID.
    Namelen: The maximum length of filenames allowed on this filesystem.
    Type: The filesystem type (e.g., ext2/ext3).
    Blocks: Total, free, and available blocks on the filesystem, and the block size.
    Inodes: The total number of inodes (data structures used to store file metadata), and the number of free inodes.

The stat command is useful for quickly retrieving information about files, directories, and filesystems, helping with system diagnostics and file management tasks.

### 14). Diff Command

The diff command in Linux is used to compare the contents of two files and display the differences between them. By default, it shows line-by-line changes, and it can highlight modifications, additions, or deletions in a simple format.
Syntax

    diff [options] file1 file2

Example Explanation

Let's break down the command and the output of comparing two files, name_list.txt and name_list_new.txt.

    $ diff -w name_list.txt name_list_new.txt

Option -w

    The -w option tells diff to ignore white spaces (spaces and tabs) while comparing the files. This means that any extra spaces or differences in indentation between the two files will not be considered in the comparison.

    Diff Output Breakdown

    2c2,3
    < John Doe
    ---
    > John M Doe
    > Jason Bourne

        2c2,3: This line indicates that line 2 in name_list.txt (the first file) has been changed and now corresponds to lines 2 and 3 in name_list_new.txt (the second file).
            2c2,3: 2c means "change on line 2" and 2,3 means the change involves lines 2 and 3 of the second file.

        < John Doe: The line starting with < indicates the content from the first file (name_list.txt). It shows that "John Doe" was on line 2 in the original file.

        ---: The line with --- separates the changes between the two files.

        > John M Doe: The line starting with > indicates the content from the second file (name_list_new.txt). It shows that "John M Doe" replaces "John Doe" on line 2 of the new file.

        > Jason Bourne: Additionally, "Jason Bourne" has been added as a new line on line 3 in the second file.

    Summary

    The diff command compares the two files and shows that:

        Line 2 in name_list.txt ("John Doe") was modified to "John M Doe" and a new line "Jason Bourne" was added in name_list_new.txt.

    This helps you quickly identify what has changed between two versions of a file.

### 15). ac Command

The ac command in Linux is used to display statistics about user login and connect times. It can show the total connect time for a specific user or all users, either for today or broken down by individual days.
Usage of ac Command

    Display the Connect Time for the Current User: When used without any user-specific options, the ac command shows the connect time for the currently logged-in user. The -d option can be used to show a breakdown of connect time for each individual day.

    Example:    $ ac -d

        Output:

        Dec 1 total 1.08
        Dec 2 total 0.99
        Dec 3 total 3.39
        Dec 4 total 4.50
        Today total 6.10

    This output shows the total connect time for each day and today's connect time.

Display Connect Time for All Users: Use the -p option to display the cumulative connect time for all users on the system.

Example:    $ ac -p

        Output:

        john 3.64
        madison 0.06
        sanjay 88.17
        nisha 105.92
        ramesh 111.42
        total 309.21

    This output shows the connect time for each user and the total connect time for all users combined.

Display Connect Time for a Specific User: If you want to see the connect time report for a specific user, you can specify the username with the -d option.

Example:    $ ac -d sanjay

        Output:

            Jul 2 total 12.85
            Aug 25 total 5.05
            Sep 3 total 1.03
            Sep 4 total 5.37
            Dec 24 total 8.15
            Dec 29 total 1.42
            Today total 2.95

        This output shows the daily connect time for the user "sanjay" on different dates.
Summary:
    ac -d: Shows daily connect times for the current user.
    ac -p: Shows cumulative connect times for all users.
    ac -d <username>: Shows daily connect times for a specific user.

### 16). Execute Commands in the Background
In Linux, there are several methods to execute commands or shell scripts in the background. Below are the five methods explained with examples:
    -- Method 1: Use & (Ampersand)

    Appending an ampersand (&) at the end of a command will execute the command in the background. This allows you to continue using the terminal while the command runs.

Example:    $ ./my-shell-script.sh &

    This will run the my-shell-script.sh script in the background, allowing you to use the terminal for other commands.

    -- Method 2: Use nohup

    When you run a command in the background using &, the command will be terminated if you log out. To prevent this, you can use nohup, which stands for "no hang up," to make sure the command continues running even after you log out.

Example:    $ nohup ./my-shell-script.sh &

    The nohup command ensures that the command runs in the background, even if you log out or close the terminal.

    -- Method 3: Use screen Command

    The screen command allows you to start a session, run a command in the background, and then detach from the session. You can reattach to the session later and see the output of the command exactly as you left it.

    Example:
        Start a screen session:
        $ screen
        Run your command:
        $ ./my-shell-script.sh
        Detach from the screen session by pressing Ctrl + A, then D.
        To reattach to the session, use:
        $ screen -r

    -- Method 4: Use at Command

    The at command allows you to schedule a job to run at a specific time. It is useful when you want to run a command at a specific future time.

    Example: To execute a script (backup.sh) at 10 a.m. tomorrow:

    $ at -f backup.sh 10 am tomorrow    => This will schedule the backup.sh script to run at 10 a.m. tomorrow.

    -- Method 5: Use watch Command

    The watch command runs a specified command at regular intervals and shows the output. This is useful for monitoring the status of commands that you want to run repeatedly.

    Example: To monitor disk space usage every 2 seconds, use:

    $ watch df -h

    This will repeatedly execute df -h and show the disk usage, updating the display every 2 seconds.

Summary of Methods:

    &: Executes a command in the background.
    nohup: Keeps a background command running even after logging out.
    screen: Allows you to run a command in the background and reattach to it later.
    at: Schedules a command to run at a specific time.
    watch: Continuously runs a command at specified intervals.

### 17). sed Basics - Find and Replace Using Regular Expressions (RegEx)

The sed command is a powerful tool in Linux for stream editing, allowing you to perform find-and-replace operations using regular expressions. Below are the basic usages of sed for text substitution and manipulation.

Syntax: sed 'ADDRESSs/REGEXP/REPLACEMENT/FLAGS' filename
            'PATTERNs/REGEXP/REPLACEMENT/FLAGS' filename
    s: substitute command.
    REGEXP: Regular expression to match.
    REPLACEMENT: String to replace the matched pattern.
    FLAGS: Modifiers for the substitution behavior, such as g for global substitution, p for printing, etc.

Basic Example:

Replace the first occurrence of a word: $ sed 's/Linux/Linux-Unix/' thegeekstuff.txt

    Replaces only the first occurrence of Linux with Linux-Unix.

Flags for Substitution:

    g: Replace all occurrences in the line.
    n: Replace the nth occurrence.
    p: Print the modified line.
    i: Case-insensitive match.
    w file: Write the result to a specified file.

Examples:
    1. Substitute the First Occurrence:
        $ sed 's/Linux/Linux-Unix/' thegeekstuff.txt
        =>  Replaces only the first occurrence of Linux in each line with Linux-Unix.
    2. Substitute All Occurrences:
        $ sed 's/Linux/Linux-Unix/g' thegeekstuff.txt
        =>  The g flag ensures that all occurrences of Linux are replaced with Linux-Unix.
    3. Substitute Only the 2nd Occurrence:
        $ sed 's/Linux/Linux-Unix/2' thegeekstuff.txt
            =>  Replaces only the second occurrence of Linux in each line.
    4. Write Changes to a File and Print the Changes:
        $ sed -n 's/Linux/Linux-Unix/gpw output' thegeekstuff.txt
            -n prevents automatic printing.
            p prints the modified line.
            w writes the result to a file (output).
    5. Substitute Only When the Line Matches a Pattern:
        $ sed '/\-/s/\-.*//g' thegeekstuff.txt
        =>  This command checks if a line contains -, and if it does, it deletes everything after -.
    6. Delete Last X Number of Characters From Each Line:
        $ sed 's/...$//' thegeekstuff.txt
        =>  Removes the last 3 characters from each line.
    7. Eliminate Comments:
        $ sed -e 's/#.*//' thegeekstuff.txt
            Removes all comment lines (lines starting with #).
    8. Eliminate Comments and Empty Lines:
        $ sed -e 's/#.*//;/^$/d' thegeekstuff.txt
            The first command removes comment lines.
            The second command deletes empty lines.
    9. Convert DOS newlines (CR/LF) to Unix Format:
        $ sed 's/\r//' filename
            This will remove the carriage return (\r) and convert DOS newlines to Unix-style.
    10. Eliminate HTML Tags:
        $ sed -e 's/<[^>]*>//g' thegeekstuff.txt
             This removes all HTML tags from the file.

### 17). Vim Editor Navigation Fundamentals

Vim is a powerful text editor, and being proficient with its navigation commands can significantly improve your productivity. Here are essential navigation commands and concepts to help you move through files efficiently.
1. Line Navigation:

    k: Move up one line.
    j: Move down one line.
    l: Move right (one character).
    h: Move left (one character).
    Repeat movements: Use a number to repeat the movement. For example:
        10j: Move down 10 lines.

Special Positioning Within a Line:

    0: Go to the beginning of the current line.
    ^: Go to the first non-blank character of the line.
    $: Go to the end of the current line.
    g_: Go to the last non-blank character of the line.

2. Screen Navigation:

    H: Go to the first line of the screen.
    M: Go to the middle line of the screen.
    L: Go to the last line of the screen.
    ctrl + f: Move forward one full screen.
    ctrl + b: Move backward one full screen.
    ctrl + d: Move forward half a screen.
    ctrl + u: Move backward half a screen.

3. Special Navigation:

    N%: Go to the Nth percentage of the file.
    NG: Go to the Nth line in the file.
    G: Go to the end of the file.
    `”: Go to the position where you were in NORMAL mode when the file was last closed.
    `^: Go to the position where you were in INSERT mode when the file was last closed.
    g: Go to the beginning of the file.

4. Word Navigation:

    e: Move to the end of the current word.
    E: Move to the end of the current WORD (WORD includes sequences of non-blank characters separated by spaces).
    b: Move to the beginning of the previous word.
    B: Move to the beginning of the previous WORD.
    w: Move to the beginning of the next word.
    W: Move to the beginning of the next WORD.

Example:

    192.168.1.1 is considered a single WORD, but 192, .168, .1, and .1 would each be individual words (if spaces separated them).

5. Paragraph Navigation:

    {: Move to the beginning of the current paragraph.
    }: Move to the end of the current paragraph.
    Press { or } repeatedly to move between paragraphs.

6. Search Navigation:

    /pattern: Search for the next occurrence of "pattern".
    ?pattern: Search for the previous occurrence of "pattern".
    *: Go to the next occurrence of the word under the cursor.
    #: Go to the previous occurrence of the word under the cursor.

7. Code Navigation:

    %: Move to the matching parenthesis, bracket, or brace in the code. This is useful when working with code that uses these delimiters.

8. Navigation from Command Line:

    vim +N filename: Open the file and jump directly to line N.

vim +10 /etc/passwd

vim +/pattern filename: Open the file and jump to the first occurrence of the pattern.

vim +/install README

vim +?pattern filename: Open the file and jump to the last occurrence of the pattern.

    vim +?bug README

Delete Commands in Vim:

    Delete a character:
        x: Deletes the character under the cursor.
        X: Deletes the character before the cursor (like Backspace).

    Delete a word:
        dw: Deletes from the cursor position to the beginning of the next word.
        dW: Deletes from the cursor position to the beginning of the next WORD (words are separated by spaces or punctuation).

    Delete to the end of the line:
        d$: Deletes from the cursor position to the end of the current line.

    Delete an entire line:
        dd: Deletes the current line.
        dNd: Deletes N lines starting from the current line. For example, 3dd deletes 3 lines.

    Delete a range of lines:
        dNdM: Deletes lines from the current line to line N.
        Example: d5d deletes the current line and the next 4 lines.

    Delete until a pattern (search):
        d/pattern: Deletes everything from the cursor position to the next occurrence of "pattern".

    Delete all text in a file:
        ggdG: Deletes all text in the file (go to the beginning, delete to the end).

    Undo a deletion:
        u: Undo the last change, including a delete action.
        Ctrl + r: Redo the undone change.
Insert Commands in Vim:

    Enter Insert Mode:
        i: Insert before the cursor.
        I: Insert at the beginning of the current line.
        a: Append after the cursor.
        A: Append at the end of the current line.
        o: Open a new line below the current line and enter Insert mode.
        O: Open a new line above the current line and enter Insert mode.

    Insert text in a specific position:
        r: Replace the character under the cursor with a single character.
        R: Enter Replace mode, where every key press replaces a character under the cursor.        

Copying (Yanking) Text in Vim:

    Yank a line:
        yy: Yanks (copies) the current line.

    Yank N lines:
        Nyy: Yanks N lines starting from the current line. For example, 3yy yanks the current line and the next 2 lines.

    Yank a word:
        yw: Yanks from the cursor to the end of the current word.
        yW: Yanks to the end of the current WORD (words are separated by spaces or punctuation).

    Yank to the end of the line:
        y$: Yanks from the cursor position to the end of the current line.

    Yank a block of text (visual mode):
        v: Enter Visual mode.
        Move the cursor to select the text you want to copy.
        y: Yanks the selected text.

    Yank the entire file:
        ggyG: Yanks the entire file (from the beginning to the end).

Pasting Text in Vim:

    Paste after the cursor:
        p: Pastes the yanked text after the cursor.

    Paste before the cursor:
        P: Pastes the yanked text before the cursor.

    Paste N times:
        Np or NP: Pastes the yanked text N times. For example, 3p pastes the text 3 times after the cursor.

Copy/Paste between Files:

    Copy from one file to another:
        Use :e filename to open the second file.
        Yank the text in the first file using the above commands.
        Switch to the second file and use p to paste.

    Copy a section of text to a register:
        "ayy: Yank a line into register a.
        "ap: Paste from register a.

Cut and Paste (Delete and Paste):

    d (delete) command is similar to yank, but it removes the text. After deleting text, you can paste it using p or P:
        dd: Deletes the current line (acts like cutting).
        d2w: Deletes the next two words (acts like cutting).
        d$: Deletes from the cursor to the end of the line.
        After deleting, you can paste using p or P.

### 18). chmod

Symbolic Representation Recap:

    u: User (owner)
    g: Group
    o: Others
    r: Read permission
    w: Write permission
    x: Execute permission
    +: Add permission
    -: Remove permission
    =: Set permission

Examples of Using chmod with Symbolic Representation:
1. Add Single Permission:
    To add execute permission for the user (owner) of a file:
        chmod u+x filename  => This command adds the execute permission for the user, without affecting any other permissions.
2. Add Multiple Permissions:
    You can add multiple permissions at once, separated by commas:
        chmod u+r,g+x filename
    This command:
        Adds read permission for the user
        Adds execute permission for the group
3. Remove Permission:
    To remove both read and execute permissions for the user:
        chmod u-rx filename => This removes the read (r) and execute (x) permissions for the user.
4. Change Permission for All Roles:
    To add execute permission for user, group, and others:
        chmod a+x filename  => This command gives execute permission to the user (u), group (g), and others (o).
5. Make Permissions of One File Same as Another:
    To copy the permissions of file1 to file2:
        chmod --reference=file1 file2   =>  This sets the permissions of file2 to be exactly the same as file1.
6. Apply Permissions Recursively:
    To change the permissions of all files and subdirectories within a directory:
        chmod -R 755 directory-name/    =>  The -R flag changes permissions recursively, making all files and directories inside directory-name have 755 permissions (read, write, and execute for the user, and read/execute for the group and others).
7. Change Permissions Only for Directories (Not Files):
    To give execute permission to only subdirectories (not files) within a directory:
        chmod u+X * =>  The X (uppercase) flag gives execute permission only to directories, or files that already have execute permission for others or group. This avoids changing files that shouldn't be executable.

Additional Notes:
    a is a shorthand for all users (user, group, and others).
    -R is used for recursive permission changes.
    X (uppercase) gives execute permissions to directories and files that are already executable for other users.

### 19). wget

1. Download a Single File
    wget http://example.com/file.tar.bz2
        This will download the file and display the progress, showing download percentage, total bytes, download speed, and estimated time.
2. Download and Store with a Different Filename (-O option)
    wget -O newfilename.zip http://example.com/file.php?src_id=7701
        This prevents the filename from being incorrectly stored, allowing you to specify a desired output name.
3. Limit Download Speed (--limit-rate)
    wget --limit-rate=200k http://example.com/file.tar.bz2
        Limits the download speed to 200 KB/s.
4. Continue an Incomplete Download (-c option)
    wget -c http://example.com/largefile.tar.bz2
        This resumes a download from where it was interrupted.
5. Download in the Background (-b option)
    wget -b http://example.com/largefile.tar.bz2
        Runs the download in the background and logs the progress to a file (wget-log).
6. Mask User Agent (--user-agent)
    wget --user-agent="Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008092416 Firefox/3.0.3" http://example.com/file.html
        Masks the wget user-agent to appear as a browser.
7. Test a URL Before Downloading (--spider)
    wget --spider http://example.com/file.html
        Checks if the URL is accessible without downloading the file.
8. Increase Retry Attempts (--tries)
    wget --tries=75 http://example.com/file.tar.bz2
        Increases the retry attempts to 75 in case of network errors.
9. Download Multiple Files from a List (-i option)
    Create a list of URLs in a file (e.g., download-list.txt) and download them:
        wget -i download-list.txt
10. Download a Full Website (--mirror)
    wget --mirror -p --convert-links -P ./localdir http://example.com
    This will download an entire website for offline viewing, including necessary files and converted links for local browsing.
11. Reject Certain File Types (--reject)
        wget --reject=gif http://example.com
            Prevents downloading .gif files from the website.
12. Log Output to a File (-o option)
        wget -o download.log http://example.com/file.tar.bz2
            Logs all output to download.log instead of printing to the terminal.
13. Quit After Download Exceeds a Certain Size (-Q option)
        wget -Q5m -i download-urls.txt
            Stops downloading once the total size exceeds 5 MB (works for recursive downloads).
14. Download Only Certain File Types (-r -A option)
        wget -r -A.pdf http://example.com
            Downloads only PDF files from the website.
15. FTP Download with wget
    Anonymous FTP:
        wget ftp://example.com/file.tar.gz
    FTP with Username and Password:
        wget --ftp-user=yourusername --ftp-password=yourpassword ftp://example.com/file.tar.gz

### 20). SSH 
    To debug SSH client connections and troubleshoot issues, you can use the -v option (or -vv for more verbosity, -vvv for even more detailed output) when running the ssh command. This will provide detailed debug messages, allowing you to see the various stages of the SSH connection process, including configuration parsing, key exchange, authentication, and connection status.
        $ ssh -vvv -l jsmith remotehost.example.com

-- Steps to Toggle SSH Session Using Escape Character:

    localhost$ ssh -l jsmith remotehost
        Once logged in, you will be at the remote host's shell:
    remotehost$

Temporarily Return to Localhost: 
    remotehost$ ~^Z
    [1]+ Stopped ssh -l jsmith remotehost
    localhost$

Check the Job List: The SSH session is now running in the background as a suspended job. You can check the job status using the jobs command:

localhost$ jobs
[1]+ Stopped ssh -l jsmith remotehost

Return to the Remote Host: To return to the remote host without re-entering the password, bring the SSH session back to the foreground by using the fg command with the job number:

    localhost$ fg %1
    ssh -l jsmith remotehost
    remotehost$

By using this method, you can switch back and forth between your local machine and the remote host without disconnecting the SSH session, allowing you to multitask efficiently.

-- Steps to Display SSH Session Statistics:

    Login to the Remote Host: Start by connecting to the remote host using SSH:

localhost$ ssh -l jsmith remotehost

Display the Statistics: Once logged in, type the SSH escape character ~ followed by s to display the SSH session statistics. Note that ~ will not appear on the command line, and it requires you to press s right after typing ~:

remotehost$ ~s

This will display statistics such as:

    Remote and Local Host Info: Information about the local and remote host.
    SSH Version: Versions of SSH for both client and server.
    Data Transferred: Compressed and uncompressed bytes received and sent.
    Packets Sent and Received: The number of packets transferred.
    Rekeys: The number of times encryption keys have been exchanged.
    Algorithms: The cryptographic algorithms used for key exchange, encryption, and compression.

-- 1. Disable Root Login (PermitRootLogin)
    By default, root login via SSH is allowed. It's recommended to disable direct root login and instead use a normal user account and then escalate to root via sudo or su -.

    # Disable root login
    PermitRootLogin no
--  2. Allow Only Specific Users or Groups (AllowUsers, AllowGroups)

    To limit access to the SSH server to specific users or groups, use the AllowUsers or AllowGroups directives.

    # Allow specific users to log in
    AllowUsers user1 user2 user3

    # Allow only specific groups to log in
    AllowGroups sysadmins dbadmins
--  3. Deny Specific Users or Groups (DenyUsers, DenyGroups)

    Alternatively, you can deny specific users or groups from logging in.

    # Deny specific users from logging in
    DenyUsers user4 user5

    # Deny users from specific groups
    DenyGroups guest developers
--  4. Change SSHD Port Number (Port)

    By default, SSH runs on port 22. Changing the port can make it harder for attackers to target the service. However, this may cause some inconvenience to legitimate users who need to know the new port.

    # Change the default SSH port
    Port 2222
-- 5. Change Login Grace Time (LoginGraceTime)

    The LoginGraceTime option specifies how long the SSH server will wait for a successful login attempt before disconnecting. Reduce the default time from 2 minutes to a shorter period to enhance security.

    # Set login grace time to 30 seconds
    LoginGraceTime 30s
-- 6. Restrict the Interface (IP Address) to Login (ListenAddress)

    If your server has multiple network interfaces and you want to limit SSH access to specific IP addresses, use the ListenAddress directive.

    # Listen on specific IP addresses
    ListenAddress 192.168.1.100
    ListenAddress 192.168.1.102
-- 7. Disconnect SSH When No Activity (ClientAliveInterval)

    To prevent idle sessions from remaining open indefinitely, configure the SSH server to disconnect clients after a period of inactivity.

    # Set the interval for checking client activity
    ClientAliveInterval 600  # In seconds (10 minutes)

    # Set the number of allowed client alive checks
    ClientAliveCountMax 0  # Disconnect after one failed check

-- Steps to Implement These Changes:
    sudo vi /etc/ssh/sshd_config

    Make the necessary changes to the configuration as shown above.

    After editing, save and exit the file.

    Restart the SSH service to apply the changes:

    sudo systemctl restart sshd
### 21). Date and Time

Set the hardware date and time based on the system date as shown below:
    # hwclock –systohc
    # hwclock --systohc –utc
    Use hwclock without any parameter, to view the current hardware date
    and time:
    # hwclock

Display Date and Time in Specific Formats

    # Display current date and time
    $ date
    Thu Jan 1 08:19:23 PST 2009

    # Show current date and time in a custom format
    $ date '+Current Date: %m/%d/%y%nCurrent Time:%H:%M:%S'
    Current Date: 01/01/09
    Current Time:08:21:41

    # Display date in specific formats
    $ date +"%d-%m-%Y"
    01-01-2009

    $ date +"%d/%m/%Y"
    01/01/2009

    $ date +"%A,%B %d %Y"
    Thursday, January 01 2009

Date Format Options

    Here are some useful format options for the date command:

        %D – Date in mm/dd/yy format
        %d – Day of the month (01..31)
        %m – Month (01..12)
        %y – Last two digits of the year (00..99)
        %a – Abbreviated weekday name (Sun..Sat)
        %A – Full weekday name (Sunday..Saturday)
        %b – Abbreviated month name (Jan..Dec)
        %B – Full month name (January..December)
        %H – Hour in 24-hour format (00..23)
        %I – Hour in 12-hour format (01..12)
        %Y – Year (1970 and onwards)

Display Past Date and Time

    You can display past dates and times with the --date option:

    # Show date and time 3 seconds ago
    $ date --date='3 seconds ago'
    Thu Jan 1 08:27:00 PST 2009

    # Show date 1 day ago
    $ date --date="1 day ago"
    Wed Dec 31 08:27:13 PST 2008

    # Show date 1 month ago
    $ date --date="1 month ago"
    Mon Dec 1 08:27:23 PST 2008

    # Show date 1 year ago
    $ date --date="1 year ago"
    Tue Jan 1 08:27:28 PST 2008

Display Future Date and Time

    # Show date 3 seconds from now
    $ date --date='3 seconds'
    Thu Jan 1 08:30:12 PST 2009

    # Show date 4 hours from now
    $ date --date='4 hours'
    Thu Jan 1 12:30:17 PST 2009

    # Show date tomorrow
    $ date --date='tomorrow'
    Fri Jan 2 08:30:25 PST 2009

    # Show date in 1 week
    $ date --date='1 week'
    Thu Jan 8 08:30:53 PST 2009

    # Show date 2 months from now
    $ date --date="2 months"
    Sun Mar 1 08:30:58 PST 2009

    # Show date 2 years from now
    $ date --date="2 years"
    Sat Jan 1 08:31:03 PST 2011

Additional Useful Commands

    Display date for a specific day of the week:

    # Show the date for the next Wednesday
    $ date --date="this Wednesday"
    Wed Jan 7 00:00:00 PST 2009

Using relative dates:

    # Display date 1 day ago
    $ date --date="-1 days ago"
    Fri Jan 2 08:31:15 PST 2009

### 22). Archive and Compression

    # Example: Zip multiple files
    zip var-log-files.zip /var/log/*

    # Example: Zip a directory recursively
    zip -r var-log-dir.zip /var/log/

    # Example: Unzip a file
    unzip var-log.zip

    # Example: View details during unzip
    unzip -v var-log.zip

    # Example: List contents of a zip file
    unzip -l var-log.zip

    Compression Levels
    The zip command allows compression levels from 0 (no compression) to 9 (maximum compression). The default is level 6.

    # Example: Zip files with different compression levels
    zip var-log-files-default.zip /var/log/*    # Default compression level 6
    zip -0 var-log-files-0.zip /var/log/*       # Compression level 0 (no compression)
    zip -9 var-log-files-9.zip /var/log/*       # Compression level 9 (maximum compression)

    # Example: Test the validity of a zip file
    unzip -t var-log.zip

    # Example: Password protect a zip file (non-interactive)
    zip -P mysecurepwd var-log-protected.zip /var/log/*

    # Example: Password protect a zip file (interactive)
    zip -e var-log-protected.zip /var/log/*

    To unzip a password-protected file, you will be prompted for the password.

        # Example: Unzip a password-protected zip file
        unzip var-log-protected.zip

    Tar Command Basics

        Create a Tar Archive
        To create a tar archive of a directory (including subdirectories and files), use the tar command with the cvf options.

    # Example: Create a tar archive of a directory
    tar cvf /tmp/my_home_directory.tar /home/jsmith

    View Contents of a Tar Archive
    Use the t option to view the contents of a tar archive.

    # Example: View contents of a tar archive
    tar tvf /tmp/my_home_directory.tar

    Extract Files from a Tar Archive
    Use the x option to extract files from a tar archive.

    # Example: Extract files from a tar archive
    tar xvf /tmp/my_home_directory.tar

    Extract Files from a Tar Archive to a Specific Directory. Use the -C option to specify a directory to extract files to.

        # Example: Extract tar.gz to a specific directory
        tar xvfz /tmp/my_home_directory.tar.gz -C /home/ramesh

-- Using gzip with tar

To compress or decompress tar archives with gzip compression (.tar.gz), you use the -z option.

    Create a .tar.gz Archive (with gzip compression)
    Use the -z option with tar to compress the archive using gzip.

    # Example: Create a tar.gz archive
    tar cvfz /tmp/my_home_directory.tar.gz /home/jsmith

    Extract a .tar.gz Archive (with gzip compression)
    Use the -z option with tar to decompress the archive.

    # Example: Extract a tar.gz archive
    tar xvfz /tmp/my_home_directory.tar.gz

    List Contents of a .tar.gz Archive
    Use the -z option with tar to view the contents without extracting.

        # Example: List contents of a tar.gz archive
        tar tvfz /tmp/my_home_directory.tar.gz

    Note: gzip is faster but offers lower compression than bzip2.

-- Using bzip2 with tar

    To compress or decompress tar archives with bzip2 compression (.tar.bz2), you use the -j option.

        Create a .tar.bz2 Archive (with bzip2 compression)
        Use the -j option with tar to compress the archive using bzip2.

    # Example: Create a tar.bz2 archive
    tar cvfj /tmp/my_home_directory.tar.bz2 /home/jsmith

    Extract a .tar.bz2 Archive (with bzip2 compression)
    Use the -j option with tar to decompress the archive.

    # Example: Extract a tar.bz2 archive
    tar xvfj /tmp/my_home_directory.tar.bz2

    List Contents of a .tar.bz2 Archive
    Use the -j option with tar to view the contents without extracting.

        # Example: List contents of a tar.bz2 archive
        tar tvfj /tmp/my_home_directory.tar.bz2

    Note: bzip2 provides higher compression but is slower compared to gzip.

    Use -z for gzip compression (.tar.gz) for faster performance but lower compression.
    Use -j for bzip2 compression (.tar.bz2) for better compression but slower performance.

### 23). Partitioning a Disk Using fdisk

When you install a new disk on your server, you will need to partition it using tools like fdisk. Below are the common commands and steps to manage disk partitions with fdisk.
Key fdisk Commands:

    n: Create a new partition.
    d: Delete an existing partition.
    p: Print the partition table.
    w: Write the changes to the partition table (save).
    q: Quit the fdisk utility.

Steps to Create a Partition Using fdisk

    Start fdisk for the Disk: Begin by running fdisk on the disk (e.g., /dev/sda).
    # fdisk /dev/sda

    Print the Partition Table: Use p to print the current partition table.
        Command (m for help): p

            Example output:

            Disk /dev/sda: 287.0 GB, 287005343744 bytes
            255 heads, 63 sectors/track, 34893 cylinders
            Units = cylinders of 16065 * 512 = 8225280 bytes
            Device Boot Start End Blocks Id System

    Create a New Partition: Use n to create a new partition.
        Command (m for help): n

            Select the partition type (p for primary partition), partition number, start, and end cylinders or size.

            Example:

            Command action
            e extended
            p primary partition (1-4)
            p
            Partition number (1-4): 1
            First cylinder (1-34893, default 1): <press Enter>
            Last cylinder or +size or +sizeM or +sizeK (1-34893, default 34893): <press Enter>

    Write Changes to the Disk: After creating the partition, use w to save the changes.

    Command (m for help): w
        Example output:

        The partition table has been altered!
        Calling ioctl() to re-read partition table.
        Syncing disks.

    Verify the Partition: To verify that the partition was successfully created, run fdisk again.

    # fdisk /dev/sda
    Command (m for help): p

        Example output:

        Device Boot Start End Blocks Id System
        /dev/sda1 1 34893 280277991 83 Linux

    Exit fdisk: To exit fdisk, use the q command.
        Command (m for help): q
-------
    Formatting the Partition
        After creating a partition, it needs to be formatted before it can be used. You can format the partition with a file system like ext2, ext3, or ext4.

    Format the Partition Using mke2fs: For example, to format the partition /dev/sda1 as ext3:
        # mke2fs -j /dev/sda1

    This will create an ext3 file system on /dev/sda1. You can specify optional parameters such as block size or reserved blocks.

    Example of Setting Specific Parameters:
        # mke2fs -m 0 -b 4096 /dev/sda1

        This command sets:
            -m 0: Reserve 0% of the file system for the root user (default is 5%).
            -b 4096: Set the block size to 4096 bytes.
-------
    Mounting the Partition

    Once the partition is formatted, you can mount it to a specific directory.

        Create a Mount Directory:

    # mkdir /home/database

    Mount the Partition:

    # mount /dev/sda1 /home/database

    Automatically Mount on Boot: To ensure the partition is mounted automatically after reboot, add the following entry to /etc/fstab:

        /dev/sda1 /home/database ext3 defaults 0 2

    Viewing and Tuning the Partition with tune2fs

    After the partition is formatted, you can use tune2fs to view and tune filesystem parameters.

        View Filesystem Information:

    # tune2fs -l /dev/sda1

        Example output:

        Filesystem volume name: /home/database
        Filesystem UUID: f1234556-e123-1234-abcd-bbbbaaaaae11
        Filesystem magic number: 0xEF44
        Filesystem revision #: 1 (dynamic)
        Filesystem state: not clean
        Inode count: 1094912
        Block count: 140138994

    Change Filesystem Volume Name:

        # tune2fs -L database-home /dev/sda1

        This changes the filesystem volume name to database-home.

    Creating and Enabling a Swap Partition

    If you need to add swap space, you can create a swap file system.

        Create a Swap File:

    # dd if=/dev/zero of=/home/swap-fs bs=1M count=512

    Set Up the Swap File:

    # mkswap /home/swap-fs

    Enable the Swap File:

    # swapon /home/swap-fs

    Add Swap to /etc/fstab:

        /home/swap-fs swap swap defaults 0 0

    This will enable the swap file on boot.

### 24). User and Group Management
    Create a new group: $ groupadd developers
    
    Add an Existing User to the Group: 
        You cannot use useradd to modify an existing user, as it is meant for creating new users. Attempting to use useradd for an existing user will result in an error:
            useradd -G developers jsmith
            Error:  useradd: user jsmith exists
        Instead, use usermod to modify the group membership of an existing user:
            usermod -g developers jsmith
    Validate Group Membership Modification
        Check the user's details in the /etc/passwd file:
            grep jsmith /etc/passwd
        Confirm the group membership in the /etc/group file:
            grep jsmith /etc/group
            
### 25). Steps to Set Up SSH Passwordless Login in OpenSSH
    Step 1: Generate SSH Key Pair on Local Host
        ssh-keygen
    Step 2: Copy Public Key to Remote Host
        ssh-copy-id -i ~/.ssh/id_rsa.pub remote-host
        This command:
            Copies the public key to the ~/.ssh/authorized_keys file on the remote host.
            Ensures proper permissions for ~/.ssh and ~/.ssh/authorized_keys on the remote host.
        If ssh-copy-id is unavailable, manually copy the public key:
            cat ~/.ssh/id_rsa.pub | ssh remote-host 'mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys'
    Step 3: Verify Passwordless Login
        ssh remote-host =>  confirm that it does not prompt for a password

### 26). Crontab Basics and Examples
Adding a Job to Cron

    Use crontab -e to edit the crontab file for the current user.
    Add a cron job in the following format:

{minute} {hour} {day-of-month} {month} {day-of-week} {command}

crontab -e	Edit the crontab file. Creates one if it doesn't exist.
crontab -l	Display the current crontab.
crontab -r	Remove the crontab file.
crontab -ir	Prompt before deleting the crontab.

To avoid overlapping jobs, use a lock file or tools like flock:
    * * * * * flock -n /tmp/myscript.lock /path/to/script.sh

-- Anacron doesn’t expect system to be running 24 x7. If a job is scheduled, and system is down during that, it start the jobs when the system comes back up. Ideal for desktops and laptops.
    /etc/anacrontab file has the anacron jobs mentioned in the following format
        period delay job-identifier command

### 27). rsync
-   rsync (Remote Sync): Used for efficient file synchronization and backup in UNIX/Linux.
-   Transfers only changed blocks after the first sync, optimizing speed and bandwidth.

        rsync [options] source destination
    1. Synchronize Two Directories (Local)

    rsync -zvr /var/opt/installation/inventory/ /root/temp
    Options:

    -z: Enable compression.
    -v: Verbose output.
    -r: Recursive sync.
    2. Preserve Timestamps and Permissions

    rsync -azv /var/opt/installation/inventory/ /root/temp/

        -a: Archive mode (preserves symbolic links, permissions, timestamps, owner, group, etc.).

    3. Synchronize a Single File

    rsync -v /var/lib/rpm/Pubkeys /root/temp/

    4. Sync Local to Remote

    rsync -avz /root/temp/ user@192.168.200.10:/home/user/temp/

    5. Sync Remote to Local

    rsync -avz user@192.168.200.10:/var/lib/rpm /root/temp

### 28). chkconfig
-   Used to configure, view, and modify services that start automatically during system boot.
-   Manages startup settings for different run levels.
Key Options

    --list: Lists the startup configuration of all services.
    --add: Adds a service to startup control.
    --del: Removes a service from startup control.
    --level: Specifies the run levels to configure a service.
    1. Check Service Startup Status

        chkconfig <service_name>

            Returns true if the service is configured for startup.
            Example:

        chkconfig network && echo "Network service is configured"
        chkconfig junk && echo "Junk service is configured"
    2. Check Service for a Specific Run Level

    chkconfig <service_name> --level <run_level>

        Example:
    chkconfig network --level 3 && echo "Network service is configured for level 3"

    3. View Current Status of Startup Services

    chkconfig --list

        To filter services starting in run level 3:

    chkconfig --list | grep 3:on

    To check a specific service:

    chkconfig --list | grep <service_name>

    4. Add a Service to Startup

    chkconfig --add <service_name>

        Example:

        chkconfig --add iptables
        chkconfig --list | grep iptables

    5. Remove a Service From Startup

    chkconfig --del <service_name>

        Example:

    chkconfig --del ip6tables
    chkconfig --list | grep ip6tables

    6. Turn On/Off Service for Specific Run Levels

        To turn off a service for run level 5:

    chkconfig --level 5 <service_name> off

    To combine multiple levels:

    chkconfig --level 35 <service_name> off

--  Understanding rc.d Directory Changes

    When adding or removing a service, chkconfig modifies symbolic links in /etc/rc.d/rc*.d directories:
        Files starting with S are for startup.
        Files starting with K are for shutdown.

        After adding a service:

            chkconfig --add nfsserver
            ls /etc/rc.d/rc3.d | grep nfsserver

            Output:

            K08nfsserver -> ../nfsserver
            S14nfsserver -> ../nfsserver
    
    Practical Tips

        Use chkconfig in automation scripts to manage service configurations programmatically.
        Always verify the service exists before adding to startup with chkconfig --list | grep <service_name>.
        Remember to set up symbolic links properly for custom services in /etc/init.d/.

### 29). iptables
    iptables is a command-line utility for managing rules in the Linux kernel firewall, providing packet filtering and NAT (Network Address Translation) functionalities.
    Key Concepts

    Chains:
        INPUT: Handles incoming packets.
        FORWARD: Handles packets routed through the server.
        OUTPUT: Handles outgoing packets.

    Targets:
        ACCEPT: Allow the packet.
        DROP: Silently discard the packet.
        REJECT: Discard the packet and send an error message to the sender.
        LOG: Log the packet to /var/log/messages.

    Tables:
        filter: Default table for packet filtering (used for INPUT, FORWARD, OUTPUT).
        nat: Used for NAT rules (e.g., port forwarding).
        mangle: Alters packet headers.
        raw: Used for exemptions from connection tracking.

1. List Current Rules

    Show all rules for the filter table:    iptables -L -v
    Show rules for a specific chain:        iptables -L INPUT -v

2. Add Rules

    Append a rule to a chain:               iptables -A INPUT -p tcp --dport 80 -j ACCEPT
    Insert a rule at a specific position:   iptables -I INPUT 1 -p tcp --dport 80 -j ACCEPT

3. Delete Rules

    Delete a specific rule:                 iptables -D INPUT 1
    Flush all rules in a chain:             iptables -F INPUT

4. Save and Restore Rules

    Save rules to a file:                   iptables-save > /etc/iptables.rules
    Restore rules from a file:              iptables-restore < /etc/iptables.rules

5. Set Default Policies

    Set a default policy to DROP:

    iptables -P INPUT DROP
    iptables -P FORWARD DROP
    iptables -P OUTPUT ACCEPT

Examples
1. Allow SSH

    Allow incoming SSH (port 22) connections:

    iptables -A INPUT -p tcp --dport 22 -m state --state NEW,ESTABLISHED -j ACCEPT
    iptables -A OUTPUT -p tcp --sport 22 -m state --state ESTABLISHED -j ACCEPT

2. Block an IP Address

    Block all traffic from 192.168.1.100:

    iptables -A INPUT -s 192.168.1.100 -j DROP

3. Allow HTTP and HTTPS Traffic

    Allow traffic on ports 80 (HTTP) and 443 (HTTPS):

    iptables -A INPUT -p tcp --dport 80 -j ACCEPT
    iptables -A INPUT -p tcp --dport 443 -j ACCEPT

4. NAT for Outbound Traffic

    Enable NAT for outbound traffic on interface eth0:

    iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

5. Port Forwarding

    Forward traffic from port 8080 to an internal server at 192.168.1.10:80:

    iptables -t nat -A PREROUTING -p tcp --dport 8080 -j DNAT --to-destination 192.168.1.10:80
    iptables -A FORWARD -p tcp -d 192.168.1.10 --dport 80 -j ACCEPT

6. Logging

    Log dropped packets:

    iptables -A INPUT -j LOG --log-prefix "Dropped Packet: " --log-level 4
    iptables -A INPUT -j DROP

Persistent Rules

    To make rules persistent across reboots:
        Use the iptables-persistent package:    sudo apt install iptables-persistent
    Save rules:                                 sudo netfilter-persistent save
    Reload rules on reboot:                     sudo netfilter-persistent reload

Troubleshooting:

    List Active Rules:          iptables -L -v -n

    Debugging Dropped Packets: Add logging for debugging:

        iptables -A INPUT -j LOG --log-prefix "INPUT DROP: " --log-level 4

    Flushing and Starting Fresh: Reset all rules:

        iptables -F
        iptables -X
        iptables -Z
### 30). yum
Install a Package:  yum install <package-name>
To skip prompts and install automatically:  yum -y install <package-name>
Remove a Package:   yum remove <package-name>
Upgrade a Package:  yum update <package-name>
Search for a Package:   yum search <keyword>
Display Package Information:    yum info <package-name>
Verify if a package is installed:   yum list installed | grep <package-name> / yum list installed <package-name>

### 31). RPM
Installing an RPM Package:  rpm -ivh <package-file.rpm>
Query All Installed Packages:   rpm -qa
Query a Specific RPM Package::  rpm -q <package-name>

### 32). Execution sequence for different .bash_* files on Linux:
1. Interactive Login Shell

    /etc/profile → This file is executed first for all users. It sets system-wide environment variables.
    If ~/.bash_profile exists, it is executed.
    If ~/.bash_profile doesn't exist, ~/.bash_login is executed (if it exists).
    If neither ~/.bash_profile nor ~/.bash_login exists, ~/.profile is executed.

Logout:

    ~/.bash_logout is executed if it exists.

2. Interactive Non-login Shell

    ~/.bashrc is executed if it exists.

3. File Execution Logic

    /etc/bashrc is executed by ~/.bashrc, so you can configure it in one place to be used for interactive shells.

4. Testing the Sequence

To test the sequence of execution, you can add custom PS1 prompts in the different files and re-login:

    Modify PS1 in /etc/profile, ~/.bash_profile, ~/.bash_login, ~/.profile, and ~/.bashrc.
    Upon login, observe which prompt is used, depending on which files were executed.

Key Points:

    Interactive login shells execute /etc/profile, and depending on the existence of ~/.bash_profile, ~/.bash_login, or ~/.profile, one of them is executed.
    Interactive non-login shells execute ~/.bashrc.
    Logout triggers ~/.bash_logout if it exists.    

### 33). Using lsof Command to View Open Files

The lsof (list open files) command is an essential tool for monitoring and troubleshooting, as it shows all open files in the system, including files, network connections, devices, and directories. Here are some useful lsof command examples:
1. View All Open Files in the System

To list all open files, simply execute lsof:

$ lsof | more

This will display a large amount of output, so using more helps to paginate the results. The columns shown are:

    COMMAND: Name of the process.
    PID: Process ID.
    USER: The user running the process.
    FD: File descriptor.
    TYPE: Type of file (e.g., DIR, REG, etc.).
    DEVICE: Device number.
    SIZE: File size.
    NODE: Node number.
    NAME: Full path of the file.

2. Count the Number of Open Files

To count the number of open files on the system, use wc -l with lsof:

$ lsof | wc -l

This will output the total number of open files (e.g., 3093 in the example).
3. View Open Files by a Specific User

To display all files opened by a specific user, use the -u option followed by the username:

$ lsof -u ramesh

This will show all files opened by the user ramesh, including processes such as vi or network connections like SSH.
4. List Users Using a Specific File

To view all users who are using a particular file, use the file path as an argument:

$ lsof /bin/vi

This shows all processes using /bin/vi. You can see the command (vi), process ID (PID), and the users using the file.
Common lsof Options:

    -u username: List open files by a specific user.
    -p pid: List open files for a specific process ID.
    -i: List open files related to network connections.
    +D <dir>: List all open files in a directory and its subdirectories.
    -t: Output just the process IDs for processes with open files (useful in scripts).

### 34). ulimit
The ulimit command in Unix-like operating systems is used to set or display user process resource limits, such as the maximum number of file descriptors a process can have, which directly relates to the number of open files (as seen in lsof). When you run lsof, it shows open files and their associated file descriptors. The ulimit command can be used to control the system's limits on resources for the user running the processes.
Relation between ulimit and lsof

    ulimit -n shows the maximum number of file descriptors a user can open. If you try to open more files than this limit, you may encounter errors when trying to run commands like lsof, or other processes that attempt to open more files.

Checking Current Limits with ulimit

To view the current file descriptor limit (i.e., the maximum number of files a process can open), run:

$ ulimit -n

This will return a number that represents the maximum number of open files (file descriptors) allowed for a process. For example:

$ ulimit -n
1024

This means a process can open up to 1024 file descriptors at a time.
Changing the ulimit for Open Files

You can increase or decrease the maximum number of open files using the ulimit -n command. To set a new limit, run:

$ ulimit -n <new_limit>

For example, to set the maximum number of open files to 4096:
$ ulimit -n 4096

Persistent Changes to ulimit

To make persistent changes to ulimit for a user, you can modify the system configuration files:

    Edit /etc/security/limits.conf to set limits for specific users or groups:

    Add lines like:

username soft nofile 4096
username hard nofile 8192

Replace username with the actual user's name. The soft limit is the current limit, and the hard limit is the maximum value that a user can set with ulimit.

Edit /etc/pam.d/common-session (on some Linux distributions) to include:

    session required pam_limits.so

This will make the file descriptor limits persist across system reboots.

### 35). Samba
Samba is an open-source implementation of the SMB/CIFS protocol, which allows Linux/Unix systems to share files, printers, and directories with Windows systems. Here's a complete guide to installing, configuring, and troubleshooting Samba.

1. Installation
    sudo apt update
    sudo apt install samba
            (or)
    sudo yum install samba samba-client samba-common

    samba --version

    systemctl status smb
    systemctl status nmb

2. Samba Configuration

Samba configuration is managed via the smb.conf file, typically located at /etc/samba/smb.conf.
2.1 Default Configuration File Structure

The smb.conf file is divided into two main sections:

    Global Settings: General server-wide settings.
    Shares: Specific configurations for shared directories.

2.2 Key Global Settings

[global]
workgroup = WORKGROUP          # Default Windows workgroup
server string = Samba Server
netbios name = ubuntu          # Server hostname
security = user                # Authentication mode
map to guest = bad user        # Map unknown users to guest
dns proxy = no

2.3 Basic Share Example

To create a shared directory:
    Create a directory:

sudo mkdir -p /srv/samba/shared
sudo chmod 0777 /srv/samba/shared

Add the share to smb.conf:

[Shared]
path = /srv/samba/shared
browseable = yes
writable = yes
guest ok = yes
read only = no

Restart Samba services:

    sudo systemctl restart smb nmb

2.4 Secured Share Example
    Create a Samba user:

sudo smbpasswd -a username

Restrict access to specific users:

[Private]
path = /srv/samba/private
valid users = username
browseable = no
writable = yes

Set directory permissions:

sudo mkdir -p /srv/samba/private
sudo chown username:username /srv/samba/private

Restart Samba:

    sudo systemctl restart smb nmb

3. Practical Usage
3.1 Testing Samba Configuration
    Validate your smb.conf file:
        $ testparm

3.2 Accessing Shares

    From Windows:
        Open File Explorer.
        Use \\server-ip\share-name.
    From Linux:
        Install the SMB client: sudo apt install smbclient

Access the share:

        smbclient //server-ip/share-name -U username

3.3 Mounting Samba Shares

Mount a Samba share on Linux:

sudo mount -t cifs //server-ip/share-name /mnt/samba -o username=username,password=password

4. Samba Configuration File Location

    Default location: /etc/samba/smb.conf

4.1 Key Directives in smb.conf

    Global Section:
        workgroup: Windows workgroup name.
        netbios name: The name used to identify the Samba server on the network.
        security: Authentication mode (user, share, ads).
    Share Definitions:
        path: Directory to share.
        guest ok: Allow guest access.
        valid users: Specify users/groups allowed to access.

5. Troubleshooting
5.1 Common Issues

    Samba Service Not Starting:     sudo systemctl status smb nmb
    Check logs:                     sudo journalctl -u smb
    Access Denied:
        Check user authentication:  smbpasswd -a username
        Ensure correct permissions: sudo chown username:username /path/to/share
        Share Not Accessible:
            Check smb.conf using:   testparm
        Firewall Blocking Samba:
            Open required ports:    sudo ufw allow Samba

        For firewalld:
            sudo firewall-cmd --permanent --add-service=samba
            sudo firewall-cmd --reload

5.2 Logs

Check Samba logs for detailed errors:    /var/log/samba/

6. Additional Features
6.1 Using Samba with Active Directory

Join Samba to an AD domain:

    Install required tools:     sudo apt install samba winbind krb5-user

Update smb.conf:

[global]
security = ads
realm = YOUR.DOMAIN.COM
workgroup = YOURWORKGROUP

Join domain:    sudo net ads join -U admin

### 36). Selinux
SELinux is a security module for Linux systems that enforces mandatory access controls (MAC), providing an additional layer of system security by restricting how programs and users access resources.
    Modes of Operation:
        Enforcing: SELinux policies are enforced, and unauthorized actions are blocked and logged.
        Permissive: SELinux policies are not enforced but violations are logged for troubleshooting.
        Disabled: SELinux is completely turned off.

    Policies: SELinux policies define rules for what resources (files, processes, ports) can be accessed by which users or applications.
        Targeted: Focuses on specific services or processes.
        MLS (Multi-Level Security): Provides strict security based on classification levels.

    Contexts: SELinux assigns a security context to every file, process, and user. A context looks like this:

    user_u:role_r:type_t:sensitivity

        Type: The most critical part for defining access control.

    Labels: Every file or process in an SELinux system has an SELinux label, viewed with the ls -Z or ps -Z command.

    Check Current Status:   $ sestatus

    Change SELinux Modes: Temporarily set to permissive:

    $ sudo setenforce 0  # Permissive
    $ sudo setenforce 1  # Enforcing

    Check Contexts: View file contexts: $ ls -Z /path/to/file
    View process contexts:              $ ps -eZ
    Change File Contexts:               $ sudo chcon -t httpd_sys_content_t /var/www/html/index.html
    Restore Default Context:            $ sudo restorecon -v /path/to/file
    List Boolean Settings: Booleans allow you to toggle SELinux policies without rewriting them.
        $ getsebool -a
    Set a Boolean:                      $ sudo setsebool -P httpd_can_network_connect on

Configuration

    Check Configuration File: The SELinux configuration is located at /etc/selinux/config.

$ cat /etc/selinux/config

Modify SELinux Mode: Edit the file and change the mode:

SELINUX=enforcing  # Options: enforcing, permissive, disabled
SELINUXTYPE=targeted

Apply changes with a reboot:

    $ sudo reboot

Common Issues and Troubleshooting

    Access Denied Issues:
        Check logs for SELinux denials: $ sudo grep avc /var/log/audit/audit.log

    File Context Mismatches:
    Files may lose proper SELinux contexts, causing services to fail. Use restorecon to fix:
        $ sudo restorecon -R /path/to/directory

    Testing in Permissive Mode: Temporarily switch to permissive mode to troubleshoot:  $ sudo setenforce 0

    Enable Specific Access: Use SELinux Booleans to allow specific operations:
        $ sudo setsebool -P samba_export_all_rw on

Practical Use Cases

    Secure a Web Server:
        Ensure files are labeled with the correct context:

    $ sudo chcon -R -t httpd_sys_content_t /var/www/html

Allow Network Access for a Service:

    Enable necessary SELinux Booleans:

    $ sudo setsebool -P httpd_can_network_connect on

Secure Samba Shares:

    Label the shared directory with Samba contexts:

        $ sudo chcon -t samba_share_t /srv/samba/share

### 37). Filesystem Categories
Programs

    bin: Programs (usually binary files).
    sbin: Programs (usually binary files) intended to be run by the superuser.
    lib: Libraries of code used by programs.
    libexec: Programs invoked by other programs, not usually by users; think “library of executable programs.”

Documentation

    doc: Documentation.
    info: Documentation files for Emacs's built-in help system.
    man: Documentation files (manual pages) displayed by the man program; these files are often compressed or contain typesetting commands.
    share: Program-specific files, such as examples and installation instructions.

Configuration

    etc: Configuration files for the system (and other miscellaneous stuff).
    init.d: Configuration files for booting Linux.
    rc.d: Configuration files for booting Linux; also includes rc1.d, rc2.d, etc.

Programming

    include: Header files for programming.
    src: Source code for programs.

Web Files

    cgi-bin: Scripts/programs that run on web pages.
    html: Web pages.
    public_html: Web pages, typically in users’ home directories.
    www: Web pages.

Display

    fonts: Fonts.
    X11: X Window System files.

Hardware

    dev: Device files for interfacing with disks and other hardware.

Filesystem Media

    media: Mount points; directories that provide access to disks.
    mnt: Mount points; directories that provide access to disks.
    misc: Mount points; directories that provide access to disks.

Runtime Files

    var: Files specific to this computer, created and updated as the computer runs.
        lock: Lock files created by programs to indicate they are running; prevent duplicate instances.
        log: Log files that track important system events, including error, warning, and informational messages.
        mail: Mailboxes for incoming mail.
        run: PID files containing the IDs of running processes; used to track or kill specific processes.
        spool: Files queued or in transit, such as outgoing email, print jobs, and scheduled jobs.
        tmp: Temporary storage for programs and/or people to use.

Operating System State

    proc: Provides a view of the operating system's state in real time.

Detailed Overview of /proc Filesystem

The /proc directory provides a virtual filesystem containing information about the system and running processes. It is dynamically created by the kernel and doesn’t consume actual disk space. Here's a breakdown:
General Characteristics

    File Properties:
        Always appear as zero-sized, read-only files.
        Timestamps are set to "now".
    Usage:
        Primarily used by programs, but advanced users can explore it manually.

Important /proc Files

    /proc/ioports
        Contains a list of the computer’s input/output hardware.
        Example: Ports used by peripherals like keyboards and network cards.

    /proc/version
        Displays the Linux kernel version.
        Equivalent to the output of the uname -r command.

    $ cat /proc/version
    Linux version 2.6.32-71.el6.i686 ...

/proc/uptime

    Shows the system uptime in seconds since the last reboot.
    For a human-readable format, use the uptime command.

/proc/[PID]

    Provides information about the process with a specific PID (Process ID).
    Example: /proc/12345 contains details about the process with PID 12345.

/proc/self

    A symbolic link pointing to the /proc/[PID] directory of the current process.

        $ ls -l /proc/self
        lrwxrwxrwx 1 root root 0 Oct 3 22:55 /proc/self -> /proc/[current_PID]

Command Combinations
Running Commands in Sequence

    Sequential Execution
    Execute multiple commands in a single line, regardless of success or failure:

$ command1 ; command2 ; command3

Conditional Execution (AND)
Execute subsequent commands only if the previous command succeeds:

$ command1 && command2 && command3

Conditional Execution (OR)
Execute subsequent commands until one succeeds:

    $ command1 || command2 || command3

Examples

    Check Kernel Version and Uptime

$ cat /proc/version ; uptime

Update System Only if the Repository List is Successfully Updated

$ sudo apt update && sudo apt upgrade

Retry a Command Until It Succeeds

    $ command1 || command2 || command3

These utilities and /proc exploration can provide a deeper understanding of the Linux operating system and process management.

### 38). Read-Only Shell Variables
- 1. Use `readonly` to make a shell variable immutable.
- **Example**:
  my_var="Hello"
  readonly my_var
  my_var="World"  # Error: readonly variable
- List readonly variables: readonly

- 2. Immutable Files with chattr : Use chattr +i to make a file immutable.
- **Example**:
    sudo chattr +i myfile.txt
    lsattr myfile.txt
    rm myfile.txt  # Error: Operation not permitted
    Remove immutability: sudo chattr -i myfile.txt

- 3. Read-Only File Permissions with chmod: Use chmod to make a file read-only for specific users.
- **Example**:
    chmod 444 myfile.txt
    ls -l myfile.txt
    Restore write permissions: chmod 644 myfile.txt

### 39). Arrays in Linux
Arrays are used to store multiple values in a single variable in Linux.
1. Declaring an Array
- **Syntax**:
    myArray=(1 2 3 "Hello" "World")
Access a specific element: echo "${myArray[1]}"  # Outputs: 2
Getting Array Length: 
    echo "${#myArray[@]}"  # Outputs the total number of elements
    echo "${#myArray[*]}"  # Equivalent to the above
Extracting Specific Values: echo "${myArray[*]:1}"  # Outputs: 2 3 Hello World
To get a specific range of values:  echo "${myArray[*]:1:2}"
    This fetches 2 elements starting from index 1.
Update an array (Add new elements): myArray+=(5 6 8)    
Working with Associative Arrays::
    Declare and initialize:
        declare -A myArray
        myArray=( [name]=Paul [age]=20 )
                echo "${myArray[name]}"  # Outputs: Paul
            Get the length:
                echo "${#myArray[@]}"  # Outputs the number of key-value pairs
            Update the array:
                myArray+=( [city]=NewYork )

### 40). String and Arithmetic Operations
String Manipulation Examples:
    str="Shell Scripting"

Length: echo ${#str} Outputs: 15
Replace:    echo ${str/Scripting/Programming} Outputs: Shell Programming
Extract Substring:  echo ${str:6:9} Outputs: Scripting
Get the length of a string: myVar="Hello World!"
                            length=${#myVar}
                            echo $length Output: 12    

Convert to uppercase:   upper=${myVar^^}
                        echo $upper Output: HELLO WORLD!
Convert to lowercase:   lower=${myVar,,}
                        echo $lower Output: hello world!
Replace a substring:    replace=${myVar/World/Buddy}
                        echo $replace Output: Hello Buddy!
Extract a substring (slice):    slice=${myVar:6:5}
                                echo $slice Output: World

### 41). User Interactions in Shell Scripting

1. Basic Input :: Takes input without displaying a prompt.
- **Command**:  read var_name
                echo "You entered: $var_name"
2. Input with Prompt
- **Command**:  read -p "Your name: " NAME
                echo "Hello, $NAME!"

Use $((expression)) for complex calculations:
echo $((5 * (3 + 2))) Output: 25                

### 42). Conditional Statements in Shell Scripting



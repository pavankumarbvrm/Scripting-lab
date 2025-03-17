# DevOps and Cloud Computing FAQs

## EC2

### What would you do if an EC2 instance is getting slow?
- Check CPU, memory, disk I/O, and network utilization via CloudWatch or system monitoring tools.
- Investigate application-specific logs for bottlenecks.
- Review instance type; upgrade to a larger instance if required.
- Analyze EBS performance; consider changing the volume type (e.g., gp2 to io1).
- Terminate unnecessary processes and optimize configurations.

### If users can’t access an application hosted on EC2, what steps would you take?
- Verify the instance state (running, stopped, etc.).
- Check security group rules and network ACLs for open ports (e.g., 80/443).
- Validate the application status by connecting locally.
- Inspect DNS configurations and endpoint mappings.
- Analyze CloudWatch logs for error insights.

## Load Balancers and Reverse Proxies

### Difference between Load Balancer and Reverse Proxy:
- **Load Balancer**: Distributes traffic across multiple servers to ensure high availability and reliability.
- **Reverse Proxy**: Acts as an intermediary, forwarding requests from clients to a single or multiple backend servers, often handling SSL termination and caching.

## Terraform

### Terraform script to create an EC2 instance and run a script on every reboot:
Use the `user_data` block with a script added to `/var/lib/cloud/scripts/per-boot`.

```hcl
resource "aws_instance" "example" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
  user_data     = <<-EOF
  #!/bin/bash
  echo "Running script on reboot" > /var/log/reboot.log
  cp /var/lib/cloud/scripts/per-boot /var/lib/cloud/scripts/per-instance
  EOF
}
```

### What is a Backend in Terraform, and why is it used?
- A Backend determines where Terraform's state file is stored (e.g., local disk, S3).
- It enables state locking, collaboration, and consistency in shared environments.

## Docker

### Docker lifecycle:
- Create → Start → Run → Pause → Stop → Restart → Kill → Remove.

### Key Docker components:
- **Docker Engine**: Core service to build/run containers.
- **Docker Images**: Templates for containers.
- **Docker Containers**: Running instances of images.
- **Docker Registry**: Stores images (e.g., Docker Hub).

### Difference between Docker Image and Docker Container:
- **Image**: Immutable, read-only blueprint.
- **Container**: Runtime instance of an image.

### What to do before creating a Docker container?
- Validate Dockerfile configurations.
- Optimize image size using multi-stage builds.
- Test the image for functionality.
- Define dependencies in the `docker-compose.yml` file if needed.

### What is Docker Compose, and how do you use it?
- Tool to define and run multi-container applications using a `docker-compose.yml` file.
- **Commands**:
  - `docker-compose up`
  - `docker-compose down`

## AWS ELB

### Steps for an "unhealthy" status in ELB:
- Check the health check configuration (port, protocol, path).
- Verify the backend instances' health and logs.
- Ensure security group rules allow inbound traffic from ELB.

## Optimizing and Securing Docker

### Optimizing Docker images:
- Use lightweight base images (e.g., alpine).
- Combine related `RUN` commands to reduce image layers.
- Avoid installing unnecessary dependencies.

### Securing Docker containers:
- Use non-root users in containers.
- Set resource limits (`--memory`, `--cpu`).
- Use signed images from trusted registries.

## Jenkins

### What is Jenkins scaling, and how do you achieve it?
- Scaling involves adding/removing agents based on demand.
- Use Kubernetes or cloud providers (AWS ECS, Azure AKS) for dynamic agent provisioning.

### Role of Master and Node in Jenkins:
- **Master**: Manages jobs, configurations, and schedules builds.
- **Node**: Executes build jobs as agents.

## Kubernetes

### Sidecar container:
- A helper container deployed alongside the main container in a pod.
- **Use cases**: Logging, proxying, data fetching.

### ConfigMap vs. Secrets:
- **ConfigMap**: Stores non-sensitive data.
- **Secrets**: Stores sensitive data (encrypted in etcd).

### Default deployment in Kubernetes:
- Deployment is the default for managing replicas of a pod.

### Taints and Tolerations:
- **Taints**: Prevent specific pods from being scheduled.
- **Tolerations**: Allow pods to override taints.

### Static Pod:
- Directly defined by kubelet, not managed by the API server.
- Different from regular pods due to no control via Deployment.

### Check pod logs and attach Prometheus for monitoring:
- **Logs**: `kubectl logs pod-name`
- **Prometheus**: Use a `ServiceMonitor` with Prometheus Operator.

### Define ConfigMap and Secrets:
**ConfigMap**:
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: example-config
data:
  key: value
```

**Secrets**:
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: example-secret
data:
  key: base64-value
```

### Default scaling in Kubernetes:
- Horizontal scaling with Horizontal Pod Autoscaler (HPA), based on CPU/memory utilization.

### RBAC in Kubernetes:
- Role-Based Access Control secures resource access.
- Defines permissions via Roles and ClusterRoles.

### ClusterRole vs. Role in RBAC:
- **Role**: Namespace-specific permissions.
- **ClusterRole**: Cluster-wide permissions.

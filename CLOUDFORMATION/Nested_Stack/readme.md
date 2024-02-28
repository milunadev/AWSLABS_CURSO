# NESTED STACK


## ASG TEMPLATE

Recursos que crea esta plantilla:

- WebserverASG: Resource name for creating the Autoscaling group.
- LaunchConfig: Launch configuration resource defined for the Autoscaling group.
- WebsecGroup: Security group for the launch configuration.

## LOAD BALANCER TEMPLATE

- ElasticLoadBalancer: Resource name for creating the load balancer.
- Elbsg: Resource name for creating a security group for the load balancer.
- Outputs: Getting the name of the load balancer using the output to refer it in the Autoscaling group.
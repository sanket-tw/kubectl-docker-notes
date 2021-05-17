# kubectl-docker-notes
# Docker
1. Create a new docker image
    docker build . -f <optional filename> -t <optional-tag-name>
2. Refer Dockerfile to view sample docker file
3. docker run, start, rm, etc.
4. `docker login` to login to docker hub and create a tag for image to push with same name as repo name.
5. docker run -p local:image-port -n <with-name>

# Kubernetes
    works with objects only, which are persistent entities in kubernetes world.

1. create a deployment by
    imperative way: kubectl create deployment <name> --image=<image-name>
    declarative way: kubectl apply -f deployment.yaml
2. create a service which is grp of pods, with same IP address, manages collections of pod together. For pod restart, IP changes, hence service is like fore-front like a  load-balancer. Also distribute traffic equally.
    imperative way: kubectl expose deployment <name> -type=LoadBalancer --port=3000
    declarative way: kubectl apply -f service.yaml
3. `minikube service node-2021-service` - for getting the service mapping to your actual system.

Debug and further learn by describing a pod:

1. also a pod can have livenessProbe to restart pod if pod is not responding. add interval, timeout and stuff.
2. add a ready ness probe to see it is ready to recieve incoming traffic.
    
    
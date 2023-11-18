# Publish to docker hub

docker build . --tag romaintalentlayer/genie-ai:$@
docker push romaintalentlayer/genie-ai:$@
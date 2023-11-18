# Publish to docker hub

docker buildx build --platform linux/amd64 . --tag romaintalentlayer/genie-ai:$@
# docker build --platform linux/amd64 . --tag romaintalentlayer/genie-ai:$@
docker push romaintalentlayer/genie-ai:$@
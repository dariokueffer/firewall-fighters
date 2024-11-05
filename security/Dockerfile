# Dockerfile
FROM debian:bookworm-slim

# Set non-interactive mode for apt
ENV DEBIAN_FRONTEND=noninteractive

# Install Nginx without prompts
RUN apt update && \
    apt install -y nginx && \
    rm -rf /var/lib/apt/lists/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

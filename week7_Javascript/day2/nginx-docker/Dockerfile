# Set the base image to the official Nginx image. You can specify a version too, e.g., nginx:1.21.3
FROM nginx

# Optionally copy a configuration file from your current directory to the container.
# This step is not necessary if you're planning to use the default Nginx configuration.
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy over static assets from your local machine to the container.
# This would be the files that make up your website, for example, HTML, CSS, and JavaScript files.
COPY ../ /usr/share/nginx/html

# The EXPOSE command is used to inform Docker that the container listens on the specified network ports at runtime.
# Nginx listens on port 80 by default.
EXPOSE 80

# The CMD command provides defaults for an executing container.
# In this case, it's simply running Nginx in the foreground mode.
CMD ["nginx", "-g", "daemon off;"]

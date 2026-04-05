# --- 第一阶段：编译阶段 ---
    FROM node:22-alpine AS build
    WORKDIR /app
    
    # 先复制依赖文件，利用 Docker 缓存层
    COPY package*.json ./
    RUN npm install
    
    # 复制源代码并执行打包
    COPY . .
    RUN npm run build
    
    # --- 第二阶段：生产运行阶段 ---
    # 使用轻量级的 Nginx 来托管静态文件
    FROM nginx:alpine
    
    # 从第一阶段的产物中，把 dist 文件夹拷贝到 Nginx 的默认目录
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # 复制自定义 Nginx 配置（支持 SPA 路由）
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # 暴露 80 端口
    EXPOSE 80
    
    CMD ["nginx", "-g", "daemon off;"]
//우리 컴퓨터에서 실행할 때는 process.env.NODE_ENV에 development가 들어간다.
export const API_URL = process.env.NODE_ENV === 'production' ? 'https://grab-market-server-deploy.fly.dev' : 'http://localhost:8080';
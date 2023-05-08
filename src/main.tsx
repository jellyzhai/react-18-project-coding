import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

// 样式初始化放最前面
import 'reset-css'

// UI框架样式

// 全局样式
import '@styles/global.scss'
// import AppRouter from '@/router'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// 组件样式

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)

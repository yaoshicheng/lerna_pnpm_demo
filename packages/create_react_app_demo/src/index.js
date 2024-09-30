// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

reportWebVitals();

function render(props) {
  const { container } = props;
  ReactDOM.render((<App />), container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  // if (window.__POWERED_BY_QIANKUN__) {
  //   window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = props.publicPath; // 使用主应用传递的 publicPath
  // }
  // if (typeof window !== 'undefined') {
  //   if (window.__POWERED_BY_QIANKUN__) {
  //     __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  //   }
  // }
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}


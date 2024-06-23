import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// * css
import './index.css';
import '@radix-ui/themes/styles.css';

// * components
import Theme from './components/Theme.tsx';

// * costume
import router from './Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Theme>
			<RouterProvider router={router} />
		</Theme>
	</React.StrictMode>
);

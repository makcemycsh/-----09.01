import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from '@gravity-ui/uikit';

import {FeatureProvider} from '@/shared/lib/features';

import {AppLayout} from './layout/AppLayout';
import {AppRoutes} from './router';

export function App() {
    return (
        <ThemeProvider theme="light">
            <FeatureProvider>
                <BrowserRouter>
                    <AppLayout>
                        <AppRoutes />
                    </AppLayout>
                </BrowserRouter>
            </FeatureProvider>
        </ThemeProvider>
    );
}

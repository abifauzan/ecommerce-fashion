import React from 'react';
import LayoutMobile from './LayoutMobile';

function Layout({ children }) {

    const mobileLayout = (
        <LayoutMobile>
            { children }
        </LayoutMobile>
    )

    return mobileLayout
}

export default Layout;
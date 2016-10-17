import React from 'react';
import CategoryManager from './category/CategoryManager';

const App = ({children}) => {
    return <div className="row">

        <div className="col-md-3">
            <CategoryManager />
        </div>
        <div className="col-md-9">
            {children}
        </div>
    </div>
};

export default App;
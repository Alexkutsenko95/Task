import React, {PropTypes} from 'react';
import {Card, CardTitle} from 'material-ui/Card';

const Dashboard = () => (

    <Card className="container">
        <CardTitle
            title="Image Uploader"
            subtitle="You should get access to this page only after authentication."

        />

    </Card>


);

Dashboard.propTypes = {
    secretData: PropTypes.string.isRequired
};

export default Dashboard;

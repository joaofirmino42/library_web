import React from 'react';
import LoginForm from '../components/forms/LoginForm';
const LoginPage = () => (
    <div className="row">
        <div className="col-md-4 offset-md-4">
            <div className="card">
                <div className="card-body">
                    <div className="text-center">
                        <img src="https://camo.githubusercontent.com/4ab5043cbde2b0254341f47529a99531ba2720bd09681d8dc1cc4bea8562ea33/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f2d536a4a435032416e7477492f586f595278492d68426a492f41414141414141414241342f62466930746837414b4767514656494f42384c2d476957535a7269596849364d67434b38424741735948672f73302f323032302d30342d30322e706e67"
                            className='img-fluid' />
                        <h5 className="card-title">Access account</h5>
                        <p className="card-text">
                        Fill in the fields
                        below to create an access account
                            <LoginForm />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default LoginPage;
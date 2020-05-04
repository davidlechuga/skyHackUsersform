import React, { Component, Fragment } from 'react';

// Import Components in a Page
import Calendari from '../components/Calendari';
import Usersform from '../components/Usersform'

class home extends Component {

    state = {
		form: {
			firstName: 'David',
			lastName: 'Lechuga Huerta',
			email: 'lechugazteca@hotmail.com',
			jobTitle: 'Developer jr',
			project: 'Twitgov'
		}
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	};


	render() {
		const margen = {
			marginTop: '50px'
		};
		return (
			<Fragment>
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6" style={margen}>
							<Calendari />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={margen}>
							<Usersform onChange={this.handleChange} formValues={this.state.form} />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default home;

import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AboutPage from "../about-page";
import Home from "../Home";
import Header from "../header";
import Form from "../Form";

export default class App extends Component {
	state = {
		renderForm: null,
		refsBtnForm: null,
		refsFormBG: null,
		dateValue: null,
		dayValue: null,
		monthValue: null,
	};
	month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"September",
		"October",
		"November",
		"December",
	];

	day = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	setValueRenderForm = (value) => {
		this.setState({
			dateValue: value.getDate(),
			dayValue: value.getDay(),
			monthValue: value.getMonth(),
			renderForm: true,
		});
	};

	removeForm = (e) => {
		if (e.target.className === "bg-form" || e.target.className === "btn-form") {
			this.setState({
				renderForm: false,
			});
		}
	};

	render() {
		const { renderForm, dayValue, monthValue, dateValue } = this.state;
		return (
			<>
				{renderForm ? (
					<Form
						month={this.month[monthValue - 1]}
						day={this.day[dayValue]}
						date={dateValue}
						removeForm={this.removeForm}
					/>
				) : null}
				<BrowserRouter>
					<Header />
					<Switch>
						<Route
							path="/home"
							exact
							render={() => {
								return <Home setValueRenderForm={this.setValueRenderForm} />;
							}}
						/>
						<Route path="/about-page" component={AboutPage} />
						<Redirect to="/home" />
					</Switch>
				</BrowserRouter>
			</>
		);
	}
}

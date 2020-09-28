import React, { Component } from "react";
import "./Form.scss";

export default class Form extends Component {
	componentDidMount() {
		const { month, day, date } = this.props;
		const refs = {
			month: document.querySelector(".input-month"),
			day: document.querySelector(".input-day"),
		};

		refs.month.placeholder = month;

		refs.day.placeholder = `${date}th ${day}`;
	}
	render() {
		const { removeForm } = this.props;
		return (
			<div onClick={(e) => removeForm(e)} className="bg-form">
				<div className="container-form">
					<button onClick={(e) => removeForm(e)} className="btn-form">
						x
					</button>
					<div className="wrapper-form">
						<label className="form-label">
							<input className="form-input input-month"></input>
							<span className="form-name ">Month</span>
						</label>

						<label className="form-label">
							<input className="form-input input-day"></input>
							<span className="form-name ">Day</span>
						</label>
					</div>
				</div>
			</div>
		);
	}
}

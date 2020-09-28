import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default class Home extends Component {
	state = { date: new Date(), weekText: null };

	onChange = (date) => {
		return this.setState({ date });
	};
	componentDidMount() {
		const weekText = document.querySelectorAll(
			".react-calendar__month-view__weekdays__weekday"
		);
		this.setState({
			weekText,
		});
		this.changeTextWeek(weekText);
	}

	changeTextWeek(weekText) {
		weekText.forEach((element) => {
			element.innerText = element.innerText[0];
		});
	}

	render() {
		const { setValueRenderForm } = this.props;
		return (
			<section className="hero">
				<div className=" container-hero">
					<div className="wrapper-text">
						<h1 className="hero-title">Choose the day for the meeting</h1>
						<p className="hero-text">
							We encourage you to book your appointment online.
							<br /> This will save you time.
						</p>
					</div>
					<div className="wrapper-calendar">
						<Calendar
							onChange={this.onChange}
							value={this.state.date}
							calendarType={"Hebrew"}
							locale={"en-EN"}
							minDetail={"month"}
							onClickDay={(value) => setValueRenderForm(value)}
						/>
					</div>
				</div>
			</section>
		);
	}
}

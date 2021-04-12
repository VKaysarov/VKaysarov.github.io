import React from 'react';

class GetData extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: '',
			monday: {
				adult: 0,
				kid: 0,
				old: 0,
				undefine: 0,
				young: 0
			},
			tuesday: {
				adult: 0,
				kid: 0,
				old: 0,
				undefine: 0,
				young: 0
			},
			wednesday: {
				adult: 0,
				kid: 0,
				old: 0,
				undefine: 0,
				young: 0
			},
			thursday: {
				adult: 0,
				kid: 0,
				old: 0,
				undefine: 0,
				young: 0
			},
			friday: {
				adult: 0,
				kid: 0,
				old: 0,
				undefine: 0,
				young: 0
			},
			saturday: {
				adult: 0,
				kid: 0,
				old: 0,
				undefine: 0,
				young: 0
			},
			sunday: {
				adult: 0,
				kid: 0,
				old: 0,
				undefine: 0,
				young: 0
			},
		};

		this.distrViewByAge = this.distrViewByAge.bind(this);
		this.distrViewByWeekDay = this.distrViewByWeekDay.bind(this);
	}

	distrViewByAge(obj, viewByAge) {
		let view = {...obj};
		view.adult += viewByAge.o[0].v;
		view.kid += viewByAge.o[1].v;
		view.old += viewByAge.o[2].v;
		view.undefine += viewByAge.o[3].v;
		view.young += viewByAge.o[4].v;

		return view;
	}

	distrViewByWeekDay(data) {
		let date = new Date(data.n);
		let days = ['Sun', 'Mon', 'Tue', 'Wod', 'Thu', 'Fri', 'Sat'];
		let weekDay = days[date.getDay()];

		switch (weekDay) {
			case 'Sun':
				let sunday = this.distrViewByAge(this.state.sunday, data);
				this.setState({sunday});

				for (let key in sunday) {
					document.querySelector(`.sunday .${key}`).style.height = `${sunday[key]}px`;
				}

				break;
			case 'Mon':
				let monday = this.distrViewByAge(this.state.monday, data);
				this.setState({monday});

				for (let key in monday) {
					document.querySelector(`.monday .${key}`).style.height = `${monday[key]}px`;
				}

				break;
			case 'Tue':
				let tuesday = this.distrViewByAge(this.state.tuesday, data);
				this.setState({tuesday});

				for (let key in tuesday) {
					document.querySelector(`.tuesday .${key}`).style.height = `${tuesday[key]}px`;
				}

				break;
			case 'Wod':
				let wednesday = this.distrViewByAge(this.state.wednesday, data);
				this.setState({wednesday});

				for (let key in wednesday) {
					document.querySelector(`.wednesday .${key}`).style.height = `${wednesday[key]}px`;
				}
				break;
			case 'Thu':
				let thursday = this.distrViewByAge(this.state.thursday, data);
				this.setState({thursday});

				for (let key in thursday) {
					document.querySelector(`.thursday .${key}`).style.height = `${thursday[key]}px`;
				}

				break;
			case 'Fri':
				let friday = this.distrViewByAge(this.state.friday, data);
				this.setState({friday});

				for (let key in friday) {
					document.querySelector(`.friday .${key}`).style.height = `${friday[key]}px`;
				}

				break;
			case 'Sat':
				let saturday = this.distrViewByAge(this.state.saturday, data);
				this.setState({saturday});

				for (let key in saturday) {
					document.querySelector(`.saturday .${key}`).style.height = `${saturday[key]}px`;
				}

				break;
		}

	}

	async componentDidMount() {
		const url = 'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0'
		let response = await fetch(url);
		let result = await response.json();
		this.setState({
			data: result.data
		})

		// let view = result.data.o[7].o[0].o.find(o => o.n === "young").v;
		for (let device of result.data.o) {
			device.o.map(this.distrViewByWeekDay)
		}

	}

	render() {
		return (
			<div>
				<div className="daysWeek">
					<div className="monday">	
						<div className="adult"></div>
						<div className="kid"></div>
						<div className="old"></div>
						<div className="undefine"></div>
						<div className="young"></div>
					</div>
					<div className="tuesday">	
						<div className="adult"></div>
						<div className="kid"></div>
						<div className="old"></div>
						<div className="undefine"></div>
						<div className="young"></div>
					</div>
					<div className="wednesday">	
						<div className="adult"></div>
						<div className="kid"></div>
						<div className="old"></div>
						<div className="undefine"></div>
						<div className="young"></div>
					</div>
					<div className="thursday">	
						<div className="adult"></div>
						<div className="kid"></div>
						<div className="old"></div>
						<div className="undefine"></div>
						<div className="young"></div>
					</div>
					<div className="friday">	
						<div className="adult"></div>
						<div className="kid"></div>
						<div className="old"></div>
						<div className="undefine"></div>
						<div className="young"></div>
					</div>
					<div className="saturday">	
						<div className="adult"></div>
						<div className="kid"></div>
						<div className="old"></div>
						<div className="undefine"></div>
						<div className="young"></div>
					</div>
					<div className="sunday">	
						<div className="adult"></div>
						<div className="kid"></div>
						<div className="old"></div>
						<div className="undefine"></div>
						<div className="young"></div>
					</div>
				</div>
				<div className="captionAge">
					<div>
						<div className="undefine"></div>
						<div>Undefined</div>
					</div>
					<div>
						<div className="kid"></div>
						<div>Kids</div>
					</div>
					<div>
						<div className="young"></div>
						<div>Young Adult</div>
					</div>
					<div>
						<div className="adult"></div>
						<div>Adult</div>
					</div>
					<div>
						<div className="old"></div>
						<div>Senior</div>
					</div>
				</div>
			</div>
		);
	}

}

export default GetData;







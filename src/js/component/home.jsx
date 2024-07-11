import React, { useState } from "react";
import todo from "../../img/image.jpg";
import "../../styles/index.css";

const Home = () => {
	const [tasks, setTasks] = useState([
		{ id: 1, title: "Make the bed" },
		{ id: 2, title: "Wash my hands" },
		{ id: 3, title: "Eat" },
		{ id: 4, title: "Walk the dog" }
	]);

	const backgroundStyle = {
		backgroundImage: `url(${todo})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		height: "100vh",
		margin: 0,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};

	const cardStyle = {
		width: "30rem",
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			const value = e.target.value.trim();
			if (value !== "") {
				const newTask = {
					id: tasks.length + 1,
					title: value
				};
				setTasks([...tasks, newTask]);
				e.target.value = "";
			}
		}
	};

	const handleDeleteTask = (id) => {
		const updatedTasks = tasks.filter(task => task.id !== id);
		setTasks(updatedTasks);
	};

	return (
		<div style={backgroundStyle}>
			<div className="container">
				<h1>To Do List!</h1>
			</div>
			<div className="card" style={cardStyle}>
				<ul className="list-group list-group-flush">
					<li className="list-group-item list-group-item-input">
						<i className="fa-solid fa-list"></i>
						{tasks.length === 0 ? (
							<input
								type="text"
								placeholder="No tasks, add tasks"
								onKeyDown={handleKeyDown}
							/>
						) : (
							<input
								type="text"
								placeholder="What's need to be done?"
								onKeyDown={handleKeyDown}
							/>
						)}
					</li>
					{tasks.length === 0 ? (
						<li className="list-group-item">
							<div className="list-item-content">No tasks, add tasks</div>
						</li>
					) : (
						tasks.map(task => (
							<li className="list-group-item" key={task.id}>
								<i className="fa-regular fa-square-check"></i>
								<div className="list-item-content">{task.title}</div>
								<button
									type="button"
									className="btn-close"
									aria-label="Close"
									onClick={() => handleDeleteTask(task.id)}
								></button>
							</li>
						))
					)}
				</ul>
				<div className="card-footer">
					<i className="fa-solid fa-triangle-exclamation"></i>
					{tasks.length} {tasks.length === 1 ? "item" : "items"} left
				</div>
			</div>
		</div>
	);
};

export default Home;
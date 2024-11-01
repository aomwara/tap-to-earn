import BottomNav from "./components/BottomNav";
import Mine from "./components/Mine";
import ProfileBar from "./components/ProfileBar";

const App = () => {
	return (
		<div className="xl:w-[30%] lg:w-[50%] md:w-[70%] w-full h-screen bg-gradient-to-t from-[#021059] to-[#040326] flex flex-col justify-between my-0 mx-auto px-5 py-3">
			<ProfileBar />
			<Mine />
			<BottomNav />
		</div>
	);
};

export default App;

import CrossIcon from "./components/icons/CrossIcon";
import MonnIcon from "./components/icons/monnIcon";
const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-4">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                        TODO
                    </h1>
                    <button><MonnIcon fill="#fff"/></button>
                </div>
                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
                    <span className="inline-block h-5 w-5 rounded-full border-2 "></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="first-line: w-full
                                  text-gray-400 outline-none"
                    />
                </form>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white [&>article]:p-4">
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete Online JS curse
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete Online JS curse
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete Online JS curse
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete Online JS curse
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="flex justify-between py-4 px-4">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            clear Completed
                        </button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto mt-8 px-4">
                <div className="bg-white p-4 rounded-md flex justify-center gap-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <p className="text-center mt-8">Drag an -drop to reorder list ...</p>
        </div>
    );
};

export default App;

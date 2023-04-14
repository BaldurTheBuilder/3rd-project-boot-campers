import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function UserTasksPage () {
    return (
        <main>
            <Navbar />
            <Header />
            <div> 
                <button type="button" class="">Create a Task</button>
                <button type="button" class="">Request a Task</button>
                <button type="button" class="">Search for Tasks</button>
            </div>
            <div id="container">
                <div id="saved-tasks">
                    {/* insert scrollable list component */}
                </div>
                <div id="supported-tasks">
                    {/* insert scrollable list component */}
                </div>
                <div id="pending-tasks">
                    {/* insert scrollable list component */}
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default UserTasksPage;
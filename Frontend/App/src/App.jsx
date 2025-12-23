import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dasboard"
import Navbar from "./components/Navbar"
import Event from "./components/Event"
import Approvals from "./components/Approvals";
import Contact from "./components/Contact";
import EventApproval from "./components/EventApproval";
import Company from "./components/Company"
import Host from "./components/Host"
import CostCenter from "./components/CostCenter"
import Marketing from "./components/Marketing"
import Form from "./components/Form";
const App = () => {
  return (
    <div className="bg-gray-100 h-min-screen w-full">
      {/* <Navbar />
      <Dashboard /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/event" element={<Event />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/eventapproval" element={<EventApproval />} />
          <Route path="/companies" element={<Form />} />
          <Route path="/host" element={<Host />} />
          <Route path="/cost" element={<CostCenter />} />
          <Route path="/marketing" element={<Marketing />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
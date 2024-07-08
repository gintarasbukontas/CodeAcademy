import "./App.css";
import { Routes, Route } from "react-router-dom";
import PetList from "./components/PetList/PetList";
import Navigation from "./components/Navigation/Navigation";
import Medications from "./components/Medications/Medications";
import AddPetForm from "./components/AddPetForm/AddPetForm";
import AddMedicationForm from "./components/AddMedicationForm/AddMedicationForm";
import AddLogForm from "./components/AddLogForm/AddLogForm";
import ViewLog from "./components/ViewLog/ViewLog";
import AddPrescriptionForm from "./components/AddPrescriptionForm/AddPrescriptionForm";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<PetList />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/add-pet" element={<AddPetForm />} />
        <Route path="/add-medication" element={<AddMedicationForm />} />
        <Route path="/add-log" element={<AddLogForm />} />
        <Route path="/add-prescription" element={<AddPrescriptionForm />} />
        <Route path="/view-log/:id" element={<ViewLog />} />
      </Routes>
    </div>
  );
}

export default App;

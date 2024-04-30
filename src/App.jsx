import { Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { DarkModeprovider } from "./context/DarkmodeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import Proposals from "./features/freelancer/Proposals";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import SubmitedProjects from "./pages/SubmitedProjects";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeprovider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <div>
          <Routes>
            <Route path="/auth" index element={<Auth />} />
            <Route
              path="/complete-profile"
              index
              element={<CompleteProfile />}
            />
            <Route path="/owner" element={<OwnerLayout />}>
              <Route
                index
                element={<Navigate to={"dashboard"} replace={true} />}
              />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Project />} />
            </Route>
            <Route path="/freelancer" element={<FreelancerLayout />}>
              <Route index element={<Navigate to={"dashboard"} replace />} />
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="projects" element={<SubmitedProjects />} />
            </Route>

            <Route path="/" index element={<Home />} />

            <Route path="*" index element={<NotFound />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </DarkModeprovider>
  );
}

export default App;

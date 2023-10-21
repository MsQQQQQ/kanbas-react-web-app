import ModuleList from "../Modules/ModuleList";
import ModuleButtongroup from "../ModuleButtonGroup";
import Status from "./status";

function Home() {
  return (
    <div className="d-flex ms-3 me-3 mt-3">
      <div className="col-md-10 col-12">
        <ModuleButtongroup />
        <ModuleList />
      </div>
      <div className="col-md-2 d-none d-xl-block">
        <Status />
      </div>
    </div>
  );
}
export default Home;
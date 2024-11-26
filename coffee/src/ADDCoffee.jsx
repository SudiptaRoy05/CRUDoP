import Swal from "sweetalert2";

export default function ADDCoffee() {
  const handleAddedCoffee = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const category = form.get("category");
    const imageUrl = form.get("photoUrl");
    const newCoffee = { name, category, imageUrl };
    console.log(newCoffee);
    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "connect-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="text-center text-5xl text-orange-500 mt-52">
      <h1>Add Coffee</h1>
      <div className="flex items-center justify-center">
        <div className="card bg-base-100 w-10/12 mx-auto  shrink-0 shadow-2xl">
          <form
            onSubmit={handleAddedCoffee}
            className="card-body grid grid-cols-2 bg-blue-950"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="photoURL"
                name="photoUrl"
                placeholder="photoUrl"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary mt-3">Add Coffee</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

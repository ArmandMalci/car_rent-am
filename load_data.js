async function get_data() {
  const response = await fetch("./data.json");
  const data = await response.json();

  return data;
}

(async function load_data() {
  var data = await get_data();

  var container = document.getElementById("container");

  data.data.forEach((item) => {
    var div = document.createElement("div");
    div.className =
      "bg-gray-200 p-4 m-4 rounded-lg shadow-md text-2xl text-center flex gap-3 items-center justify-center";

    var child = document.createElement("div");
    child.textContent = item.name;
    div.appendChild(child);

    var child1 = document.createElement("div");
    child1.textContent = item.city;
    div.appendChild(child1);

    var child2 = document.createElement("i");
    if (item.liked) {
      child2.className = "ph-fill ph-heart text-red-500";
    } else {
      child2.className = "ph ph-heart text-gray-500";
    }
    div.appendChild(child2);

    container.appendChild(div);
  });
})();

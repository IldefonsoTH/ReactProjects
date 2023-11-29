// App.jsx

import React, { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";
import { TitleBar } from "./TitleBar";


export function App() {
  // Define la lista inicial de seguidores
  const initialFollowers = [
    { userName: "IldeTH", name: "Ildefonso Torreblanca Herrero", isFollowing: true },
    { userName: "Paquillop", name: "Paco Ruiz Fernandez", isFollowing: false },
    { userName: "MutikoNano", name: "Mutiko", isFollowing: false },
    { userName: "elonmusk", name: "Elon Musk", isFollowing: true },
    { userName: "vxnder", name: "VanderHart", isFollowing: false }
  ];

  // Estado para manejar la lista de seguidores y el estado de "Mostrar más/Mostrar menos"
  const [followers, setFollowers] = useState(initialFollowers);
  const [showMore, setShowMore] = useState(false);

  // Función para manejar el cambio entre "Mostrar más" y "Mostrar menos"
  const handleShowToggle = () => {
    if (showMore) {
      // Si está en "Mostrar más", oculta los nuevos elementos
      setFollowers(prevFollowers => prevFollowers.slice(0, initialFollowers.length));
    } else {
      // Si está en "Mostrar menos", vuelve al estado inicial
      setFollowers(initialFollowers);
    }
    // Cambia el estado entre "Mostrar más" y "Mostrar menos"
    setShowMore(!showMore);
  };

  // Renderiza el componente
  return (
    <body>
        <TitleBar/>
        <section className="App">
      <h1 className="tw-followTo-title">A quién seguir</h1>

      {/* Mapea dinámicamente los seguidores y renderiza el componente TwitterFollowCard */}
      {followers.map((follower, index) => (
        <TwitterFollowCard
          key={index}
          userName={follower.userName}
          name={follower.name}
          isFollowing={follower.isFollowing}
        />
      ))}

      {/* Renderiza la sección de contenido adicional si "Mostrar más" está activado */}
{showMore && (
  <div className="additionalContent">
    {/* Mapea dinámicamente los elementos adicionales y renderiza instancias de TwitterFollowCard */}
    {[
      { userName: "victorbcalle", name: "Victor Boluda", isFollowing: true },
      { userName: "ceciarmy", name: "Cecilio Armada", isFollowing: true },
      { userName: "montselinares", name: "Montse Linares", isFollowing: false }
    ].map((follower, index) => (
      <TwitterFollowCard
        key={index}
        userName={follower.userName}
        name={follower.name}
        isFollowing={follower.isFollowing}
      />
    ))}
  </div>
)}

      {/* Renderiza el botón "Mostrar más/Mostrar menos" y maneja el clic */}
      <button className="ShowMore" onClick={handleShowToggle}>
        {showMore ? "Mostrar menos" : "Mostrar más"}
      </button>
    </section>
    </body>
    
  );
}

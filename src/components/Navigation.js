import React from 'react';

function navigation(props){
    return (
        <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="text-white">Tareas</a>
          <p>{props.titulo}</p>
        </nav>
    );
}

export default navigation;
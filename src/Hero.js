import React from "react";

const Hero = ({ handleLogout }) => {
  return (
    <div className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <h2> Welcome to this page!!!</h2>

      <h1> Powershell</h1>
      <p>
        PowerShell is a cross-platform task automation and configuration
        management framework, consisting of a command-line shell and scripting
        language. Unlike most shells, which accept and return text, PowerShell
        is built on top of the .NET Common Language Runtime (CLR), and accepts
        and returns .NET objects. This fundamental change brings entirely new
        tools and methods for automation.
      </p>
      <h1>Output is object-based</h1>
      <p>
        Unlike traditional command-line interfaces, PowerShell cmdlets are
        designed to deal with objects. An object is structured information that
        is more than just the string of characters appearing on the screen.
        Command output always carries extra information that you can use if you
        need it. If you've used text-processing tools to process data in the
        past, you'll find that they behave differently when used in PowerShell.
        In most cases, you don't need text-processing tools to extract specific
        information. You directly access portions of the data using standard
        PowerShell object syntax.
      </p>
    </div>
  );
};

export default Hero;

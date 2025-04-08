"use client";

import React, { useState } from 'react';
import ProjectHeader from '../project/ProjectHeader';
import Board from '../(components)/Board';
import List from '../(components)/List';
import Table from '../(components)/Table';

const Project = () => {
  const [activeTab, setActiveTab] = useState("Board");
  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
        {activeTab === "Board" && (<Board/>)}
        {activeTab === "List" && (<List/>)}
        {activeTab === "Table" && (<Table/>)}
    </div>
  )
}

export default Project;

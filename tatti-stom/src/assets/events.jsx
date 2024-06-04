import React, { useEffect, useState } from 'react'

import { Scheduler } from "@aldabil/react-scheduler";
import RecordEditor from './editor';
import axios from 'axios';

function Events() {

  const data = [];

  const getEvents = async () => {

    const result = await axios.get("http://localhost:8080/patientRecords", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });


    const formattedEvents = [];

    for (const event of result.data) {
      await data.push({
        id: event.id,
        start: new Date(event.start),
        end: new Date(event.end),
        title: event.patient.firstName + " " + event.patient.lastName,
        description: event.description,
        visited: event.isVisited,
        patient: event.patient,
        doctor: event.doctor,
        color: event.isVisited ? "green" : "red",
      });
      console.log(event);
    }

  }

  const fetchRemote = async (query) => {
    console.log("Query: ", query);
    let startDate = new Date(query.start).toISOString();
    let endDate = new Date(query.end).toISOString();
    const newQuery = `?start=${startDate}&end=${endDate}`;
    console.log(newQuery);
    getEvents();
    return new Promise((res) => {
      setTimeout(() => {
        res(data);
      }, 3000);
    });
  };

  function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === "?"
      ? queryString.substr(1)
      : queryString
    ).split("&");
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
  }









   







  const handleDelete = async (deletedId) => {
    
    console.log(deletedId);

    return new Promise((res, rej) => {
      setTimeout(() => {
        res(deletedId);
      }, 3000);
    });
  };

  return (

    <div>
      <Scheduler
        customEditor={(scheduler) => <RecordEditor scheduler={scheduler} />}
        getRemoteEvents={fetchRemote}
        hourFormat='24'

        week={
          {
            startHour: 9,
            endHour: 22
          }
        }
        day={
          {
            startHour: 9,
            endHour: 22
          }
        }

        translations={
          {navigation:{
            month: "Месяц",
            week: "Неделя",
            day: "День",
            today: "Сегодня",
            agenda: "Список"
          }
        }}

        
        onDelete={(...args) => console.log("Deleted: ", args)}
  />
    </div>
  )
}

export default Events
import React, { useEffect, useState } from "react";


function Dashboard({ onLogout }) {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
   fetch("https://krishna-backend-4ijc.onrender.com/api/enquiry")
      .then((res) => res.json())
      .then((data) => setEnquiries(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // సర్వీస్ ని బట్టి డైనమిక్ గా క్లాస్ నేమ్ ఇచ్చే ఫంక్షన్
  const getTagClass = (service) => {
    if (!service) return "tag-whole";
    const s = service.toLowerCase();
    if (s.includes("interior")) return "tag-interior";
    if (s.includes("exterior")) return "tag-exterior";
    if (s.includes("waterproof")) return "tag-waterproof";
    return "tag-whole";
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h2>Client Enquiries</h2>
        <button onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        {enquiries.length === 0 ? (
          <div className="no-data">No enquiries found at the moment.</div>
        ) : (
          <table className="enquiry-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Service</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((e) => (
                <tr key={e._id}>
                  <td><strong>{e.name}</strong></td>
                  <td>{e.phone}</td>
                  <td>{e.location}</td>
                  <td>
                    <span className={`service-tag ${getTagClass(e.service)}`}>
                      {e.service}
                    </span>
                  </td>
                  <td className="msg-cell">{e.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

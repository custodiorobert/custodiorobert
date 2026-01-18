const jobForm = document.getElementById('jobForm');
const jobTable = document.querySelector('#jobTable tbody');

// Load jobs from localStorage
let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
renderJobs();

// Handle form submission
jobForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const company = document.getElementById('company').value;
  const role = document.getElementById('role').value;
  const status = document.getElementById('status').value;

  const newJob = { id: Date.now(), company, role, status };
  jobs.push(newJob);
  saveJobs();
  renderJobs();

  jobForm.reset();
});

// Render jobs in table
function renderJobs() {
  jobTable.innerHTML = '';
  if (jobs.length === 0) {
    jobTable.innerHTML = `<tr><td colspan="4" style="text-align:center;">No applications yet</td></tr>`;
    return;
  }

  jobs.forEach(job => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${job.company}</td>
      <td>${job.role}</td>
      <td>${job.status}</td>
      <td>
        <button class="action-btn edit-btn" onclick="editJob(${job.id})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteJob(${job.id})">Delete</button>
      </td>
    `;
    jobTable.appendChild(row);
  });
}

// Save to localStorage
function saveJobs() {
  localStorage.setItem('jobs', JSON.stringify(jobs));
}

// Delete a job
function deleteJob(id) {
  if(confirm('Are you sure you want to delete this job?')) {
    jobs = jobs.filter(job => job.id !== id);
    saveJobs();
    renderJobs();
  }
}

// Edit a job
function editJob(id) {
  const job = jobs.find(j => j.id === id);
  const newCompany = prompt("Edit company name:", job.company);
  const newRole = prompt("Edit role:", job.role);
  const newStatus = prompt("Edit status (Applied, Interview, Rejected, Offer):", job.status);

  if(newCompany && newRole && newStatus) {
    job.company = newCompany;
    job.role = newRole;
    job.status = newStatus;
    saveJobs();
    renderJobs();
  }
}

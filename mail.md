Dear Sir,

I hope this email finds you well.

I came across the job opening for the Frontend Developer position and am excited to express my interest. With a strong background in frontend technologies and a passion for creating seamless user experiences, I believe I could be a great fit for your team.

I’ve attached my resume for your review, which highlights my skills and relevant projects. I’d welcome the opportunity to discuss how my experience aligns with your needs.

Please feel free to reach me at parmarviren16@gmail.com or +91 9619810068 at your convenience. Looking forward to your response.

Best regards,
Viren Parmar


AIEnterprise  - server side and static side code as k in interview 
jiostar - redux saga and redux thunk level code on deep how can debug code redux level 

L1-Teams Interview-Viren Parmar-ReactJs Developer-MSAS
Thursday, May 15⋅10:00 – 10:45am - clear 1 st round

Mphasis - javascript time compexcity ask q
Catch up on Firmable - normal call ------------- done
cloverinfotech - next js lot q SSG and SSR  reject he tell hot q skip this


Internal Technical Discussion_UI ReactJS_JPMC
Monday, May 19⋅1:30 – 2:00pm - done interview 1 stt totalt 3 round

React and Next.js Developer interview details
Monday, May 19⋅5:00 – 6:00pm stonetech - interview reject but interviewer time kar to hato falktu time west on interview

Storable Interview for Viren Parmar (Next+React) - virtusa - all this i have 
issue one big code flatcode without prototype i sued

Interview with Cognizant
Wednesday, May 21⋅10:30 – 11:30am promise chain login i cant build 

// Simulated API functions
const getAllStates = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const states = ['Maharashtra', 'Gujarat', 'Karnataka', 'Punjab'];
      resolve(states);
      // reject(new Error('Failed to fetch states')); // To test error handling
    }, 500);
  });
};

const pickState = (states, target = 'Maharashtra') => {
  return new Promise((resolve, reject) => {
    const selected = states.find(state => state === target);
    if (selected) {
      resolve(selected);
    } else {
      reject(new Error(`${target} not found in states.`));
    }
  });
};

const getMaharashtraData = (state) => {
  return new Promise((resolve, reject) => {
    if (state === 'Maharashtra') {
      setTimeout(() => {
        const cities = ['Mumbai', 'Pune', 'Nagpur'];
        resolve(cities);
      }, 500);
    } else {
      reject(new Error('Only Maharashtra data available.'));
    }
  });
};

// 🌐 Promise Chain Execution
getAllStates()
  .then(states => {
    console.log('✅ All states:', states);
    return pickState(states); // Pick Maharashtra
  })
  .then(selectedState => {
    console.log('✅ Selected state:', selectedState);
    return getMaharashtraData(selectedState);
  })
  .then(cities => {
    console.log('🏙️ Cities in Maharashtra:', cities);
  })
  .catch(error => {
    console.error('❌ Error:', error.message);
  });


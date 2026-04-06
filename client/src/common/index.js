
const backendDomain = "http://localhost:8080";
// http://localhost:8080/api/book
// http://localhost:8080/api/get
const summaryApi = {
    signUp : {
        url : `${backendDomain}/api/signup`,
        method : "POST",
    },
    signIn : {
        url : `${backendDomain}/api/signin`,
        method : "POST",
    },
    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : "GET",
    },
    logout_user : {
        url : `${backendDomain}/api/userLogout`,
        method : "GET",
    },
    uploadCenter : {
        url : `${backendDomain}/api/upload-center-details`,
        method : "POST",
    },
    allCenter : {
        url : `${backendDomain}/api/get-all-center`,
        method : "GET", 
    },
    addDoctor : {
        url : `${backendDomain}/api/add-doctors`,
        method : "POST",
    },
    getDoctor : {
        url : `${backendDomain}/api/get-doctors`,
        method : "GET",
        },
        // book : {
        //     url : `${backendDomain}/api/book`,
        //     method : "POST",
        // },
        // getDoctorAppointment : {
        //     url : `${backendDomain}/api/doctor/appointments`,
        //     method : "GET",
        // },
        // getPatientHistory : {
        //     url : `${backendDomain}/api/patient/history`,
        //     method : "GET",
        // }
        bookAppointment : {
            url : `${backendDomain}/api/book`,
            method : "POST",
            },
            getAllAppointment : {
                url : `${backendDomain}/api/all`,
                method : "GET",
                }, 
                getAllAppointmentByID : {
                    url : `${backendDomain}/api/all`,
                    method : "GET",
                    },
    }

export default summaryApi
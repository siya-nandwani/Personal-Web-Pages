// document.addEventListener("DOMContentLoaded",function(){
//     const searchButton =document.getElementById("searchButton");
//     const userInput=document.getElementById("userInput");
//     const statsContainer=document.querySelector(".statsContainer");
//     const easyProgressCircle=document.querySelector(".easyProgress");
//     const mediumProgressCircle=document.querySelector(".mediumProgress");
//     const hardProgressCircle=document.querySelector(".hardProgress");
//     const easyLabel=document.getElementById("easyLabel");
//     const mediumLabel=document.getElementById("mediumLabel");
//     const hardLabel=document.getElementById("hardLabel");
//     const cardStatsContainer=document.getElementsByClassName("statsCards");

//     function validUsername(username){
//         if(username.trim()===""){
//             alert("Username should not be empty");
//             return false;
//         }
//         const regex=/^[a-zA-Z0-9-_]{1,15}$/;
//         const isMatching=regex.test(username);
//         if(!isMatching){
//             alert("Invalid username");
//         }
//         return isMatching;

//     } 

//     function updateProgress(solved,total,label,circle){
//         statsContainer.style.display='block';
//         const progressDegree=(solved/total)*100;
//         circle.style.setProperty("--progress-degree", `${progressDegree}%`);
//         label.textContent = `${solved}/${total}`;
        
//     }

//     function displayUserData(parsedData){

//         // const totalQues=parsedData.data.allQuestionsCount[0].count;
//         // const totalEasyQues=parsedData.data.allQuestionsCount[1].count;
//         // const totalMediumQues=parsedData.data.allQuestionsCount[2].count;
//         // const totalHardQues=parsedData.data.allQuestionsCount[3].count;

//         // const solvedTotalQues=parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
//         // const solvedEasyQues=parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
//         // const solvedMediumQues=parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
//         // const solvedHardQues=parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

//         // updateProgress(solvedEasyQues,totalEasyQues,easyLabel,easyProgressCircle);
//         // updateProgress(solvedMediumQues,totalMediumQues,mediumLabel,mediumProgressCircle);
//         // updateProgress(solvedHardQues,totalHardQues,hardLabel,hardProgressCircle);
//         updateProgress(parsedData.easySolved, parsedData.easyTotal, easyLabel, easyProgressCircle);
//         updateProgress(parsedData.mediumSolved, parsedData.mediumTotal, mediumLabel, mediumProgressCircle);
//         updateProgress(parsedData.hardSolved, parsedData.hardTotal, hardLabel, hardProgressCircle);

//         const cardData=[
//             // {label:"Overall Submissions",value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions },
//             // {label: "Overall Easy Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions },
//             // {label: "Overall Medium Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions },
//             // {label: "Overall Hard Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions },
//             { label: "Total Solved", value: data.totalSolved },
//             { label: "Easy Solved", value: data.easySolved },
//             { label: "Medium Solved", value: data.mediumSolved },
//             { label: "Hard Solved", value: data.hardSolved }
//         ]
//         console.log(cardData);

//         cardStatsContainer.innerHTML = cardData.map(
//             data => 
//                     `<div class="card">
//                     <h4>${data.label}</h4>
//                     <p>${data.value}</p>
//                     </div>`
//         ).join("");
        
//     }


//     async function fetchUserDetails(username){
        
//         try{
//             searchButton.textContent="Searching...";
//             searchButton.disabled=true;
//             // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//             // const targetUrl='https://leetcode.com/graphql';

//             // const myHeaders = new Headers();
//             // myHeaders.append("content-type", "application/json");

//             // const graphql = JSON.stringify({
//             //     query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
//             //     variables: { "username": `${username}` }
//             // })
//             // const requestOptions = {
//             //     method: "POST",
//             //     headers: myHeaders,
//             //     body: graphql,
//             // };

//             // const response = await fetch(proxyUrl+targetUrl, requestOptions);
//             const response = await fetch(
//                 `https://leetcode-stats-api.herokuapp.com/${username}`
//             );

//             if(!response.ok){
//                 throw new Error("Unable to fetch data for this username");
//             }
//             let parsedData=await response.json();
//             console.log("Logging data: ",parsedData);

//             displayUserData(parsedData);

//         }catch(error){
//             statsContainer.innerHTML=`<p>NO DATA FOUND</p>`;

//         }finally{

//             searchButton.textContent="Search";
//             searchButton.disabled=false;
//         }
//     }

//     searchButton.addEventListener('click', function(){
//         const username=userInput.value ;
//         if(validUsername(username)){
//             fetchUserDetails(username);
//         }
//     })
// })

document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("searchButton");
    const userInput = document.getElementById("userInput");
    const statsContainer = document.querySelector(".statsContainer");

    const easyProgressCircle = document.querySelector(".easyProgress");
    const mediumProgressCircle = document.querySelector(".mediumProgress");
    const hardProgressCircle = document.querySelector(".hardProgress");

    const easyLabel = document.getElementById("easyLabel");
    const mediumLabel = document.getElementById("mediumLabel");
    const hardLabel = document.getElementById("hardLabel");

    const cardStatsContainer = document.querySelector(".statsCards");

    function validUsername(username) {
        if (username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        return true;
    }

    // function updateProgress(solved, total, label, circle) {
    //     statsContainer.style.display = "block";
    //     const progressDegree = total === 0 ? 0 : (solved / total) * 100;
    //     circle.style.setProperty("--progress-degree", `${progressDegree}%`);
    //     label.textContent = `${solved}/${total}`;
    // }
//     function updateProgress(solved, total, label, circle) {
//     statsContainer.style.display = 'block';

//     const progressDegree =
//         (typeof solved === "number" && typeof total === "number" && total > 0)
//             ? (solved / total) * 100
//             : 0;

//     circle.style.setProperty("--progress-degree", `${progressDegree}%`);
//     label.textContent = `${solved ?? 0}/${total ?? 0}`;
// }
    function updateProgress(solved, total, label, circle) {
    statsContainer.style.display = "block";

    const progressDegree = total > 0 ? (solved / total) * 100 : 0;

    circle.style.setProperty("--progress-degree", `${progressDegree}%`);
    label.textContent = `${solved}/${total}`;
}


    function displayUserData(parsedData) {

        updateProgress(parsedData.easySolved, parsedData.easyTotal, easyLabel, easyProgressCircle);
        updateProgress(parsedData.mediumSolved, parsedData.mediumTotal, mediumLabel, mediumProgressCircle);
        updateProgress(parsedData.hardSolved, parsedData.hardTotal, hardLabel, hardProgressCircle);

        const cardData = [
            { label: "Total Solved", value: parsedData.totalSolved },
            { label: "Easy Solved", value: parsedData.easySolved },
            { label: "Medium Solved", value: parsedData.mediumSolved },
            { label: "Hard Solved", value: parsedData.hardSolved }
        ];

        cardStatsContainer.innerHTML = cardData.map(
            item => `
            <div class="card">
                <h4>${item.label}</h4>
                <p>${item.value}</p>
            </div>`
        ).join("");
    }

    async function fetchUserDetails(username) {
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(
                `https://leetcode-stats-api.herokuapp.com/${username}`
            );

            if (!response.ok) {
                throw new Error("Fetch failed");
            }

            const parsedData = await response.json();

            
            if (!parsedData.totalSolved && parsedData.totalSolved !== 0) {
    throw new Error("Invalid user");
}


            displayUserData(parsedData);

        } catch (error) {
            statsContainer.innerHTML = `<p>NO DATA FOUND</p>`;
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    searchButton.addEventListener("click", function () {
        const username = userInput.value;
        if (validUsername(username)) {
            fetchUserDetails(username);
        }
    });

});

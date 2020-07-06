// Code your solution here
function findMatching(dr,st){
  return dr.filter(function(driverName){
    return driverName.toLowerCase()=== st.toLowerCase()
  })
}

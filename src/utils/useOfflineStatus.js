import { useEffect, useState } from "react";

const useOfflineStatus = () => {
  const [status, setstatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setstatus(false);
    });
    window.addEventListener("online", () => {
      setstatus(true);
    });
  });

  return status;
};
export default useOfflineStatus;

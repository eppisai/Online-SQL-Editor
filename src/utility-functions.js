/* eslint-disable no-undef */
import axios from "axios";
import { toast } from "react-toastify";

import { setOutput } from "./redux/file-slice";

export const runCode = async (content, dispatch) => {
  const id = toast.loading("Creating Submission..");
  let options = {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    params: { base64_encoded: "true" },
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      "x-rapidapi-key": process.env.JUDGE_0,
    },
    data: { language_id: 82, source_code: `${btoa(content)}` },
  };
  axios
    .request(options)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data);
      toast.update(id, {
        render: `Running Code..`,
      });
      options = {
        method: "GET",
        url: `https://judge0-ce.p.rapidapi.com/submissions/${response.data.token}`,
        params: {
          base64_encoded: "true",
          fields: "*",
        },
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key":
            "fa52c00c5cmsh5c9f4f420642014p1c5038jsn69fe440179bd",
        },
      };
      setTimeout(() => {
        axios
          .request(options)
          .then((res) => {
            if (res.data.stdout !== null) {
              dispatch(setOutput(atob(res.data.stdout)));
            } else {
              dispatch(setOutput(atob(res.data.stderr)));
            }
            toast.update(id, {
              render: `Done.`,
              type: "success",
              isLoading: false,
              autoClose: 1000,
            });
          })
          .catch((error) => {
            return error;
          });
      }, 3000);
    })
    .catch((error) => {
      return error;
    });
};

export const downloadFile = (file) => {
  const filename = file.name;
  const text = file.content;
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

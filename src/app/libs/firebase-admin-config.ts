import { initializeApp, getApps, cert } from 'firebase-admin/app';


const firebaseAdminConfig = {
  credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID!,
      clientEmail: process.env.FIRABASE_CLIENT_EMAIL!,
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCXdrEp1BAWAi2h\nuiW9ZBj555fvR/OkB8sS3Uv/CHg8E52g8t5FMvQAfjLGm6+PixRYC6Jb8O37NE/T\n63Tiu0DNl3Jsh/yrOVhT+NCFA3RQ3l8QZfK579WAi8LVKsSgSgLTW95knW+PLNfm\nIf3GbjX1I8k4ML/xd+ERslUIsHeLFutS4iY9BVKbpX42aJQUVWz2jVdt1Xc8mWBb\nTuZQXzxUe5ywcfLDONPOh6tb4TZkxio65SNpD+LXi+wJLjiniTN14KGjOgEuMdKl\nUEwVMuCYBZOqUSBBwR03CRVYavSwPJVnJA/uXgs1cS0dmUzAgf8ROyYLJmTj4txl\n/7rD66gFAgMBAAECggEAOsFpYm+IOfFoYDeE0l5VLgSANOt1gSkgxtWf2HQhqDR3\nzmrIfJGSg+pwqgjU5tst7iW9OutQdkVJvky1kArRza81TRLHmmhpclGwGhlH8uMA\nf6z8ptJ5wR72Wpj3o7JyPCmEMQW9tA3SRszi1CoGtmzGbwzCONqnLaU/RVqnVQXb\nRMSnzy1Eobmqj6CtWYOcNj/lZs4dezIWCxFOpIusX3T6TmuTBXF86jLr/ObslCZW\nVGpHPi2KA76Kc4eSkYFsZPg0fv+yu0FzMw5+vRoCJ/bP7BUREZZyPqTKnrqfLvbw\nZ4IJnvzcFTLee16xt68H5G0hH/czjdBBxpGWIUER1QKBgQDHRCXLmUTZE9HeHSHK\nW1zMrrpdvz99zMAXhwgGHr0xgLN/7RCq7NvoDKGzJ66ZPR4xeWlf05nawoLKjSdw\nN6vfXammSSCzobJNUqnOecBZT0rHDpi2IUxAbh8HKgpGn0B2P559iy9f4MuOoAdb\niBO485anPh5OOLGkz9HOtPaIpwKBgQDCll/UHHc4XCv+Vl3T1zDG7d8AgIrVoE7i\nnGWhnNdPuOmTeuPWwVzYyhYpLy8VrW6R7WQVbNUTqM1BPkyqRxUqYduit5K8NuT6\nS+q24yVII0Vg55hXXtziIYGmoUeY7zM1eWdKilkpkBaiOVOUiSvoxp7kHEQjd5E0\ndO0EL9UzcwKBgQCLfuqSkFaBPP3DZ1N7bOAXLg6riDHzaD3lepMkbap2mCmQ2a28\napo75XPhjlsNTZrweZVKD0D6wwZ6s7wzM9XvRYt5LGJnPkArHz5enB8KpparqU1A\n2yidRjoUctrEu8GNxlW2f5SHoz/9NYxRCH7+EBCcPcFLcybxQMcY1NhtqwKBgCZr\noogzBqcuK9GQI/6L4qmklf93YfJEMM81qit62Fh5XkUsYogorbhwTmfbVSSmlcpi\nYPyJ/JhhIAXd0y1b06YGpGNAc8yN2jBBhRqPRvEzZaN4lu/JXzuW+g54kbZ0pFvO\nmMJzBp/aP13Qi9wsKWtQrFbF7f5CwXzmCVZmS2ZZAoGBAIjyIhWUNTkWvQn0LVza\n1SM/DExC6vHCxR9NkTMKCuMu3USjIE7Y7OirWDVerweZaV1BkgeWiijJWLE/vkt0\nsJEJbrKMMVPxT2Ry9Owq7//zfaDwADlbwSluCAw3V4ayYErUAzqonPIDIT0YakrA\nvG0xFdYCSaYxMRukdY5pExOM\n-----END PRIVATE KEY-----\n"
    })
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}

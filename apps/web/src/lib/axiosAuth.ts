import { authOptions } from '@/api/auth/[...nextauth]/route';
import axios from '@/lib/axios';
import { getServerSession } from 'next-auth';

const axiosAuth = async () => {
  // const { data: session } = useSession();
  // const refreshToken = useRefreshToken();
  const session = await getServerSession(authOptions);
  console.log(session);

  axios.defaults.headers.common['Authorization'] = `Bearer ${session?.user.accessToken || ''}`;
  // axios.interceptors.request.use((config) => {
  //   if (!config.headers.Authorization) {
  //     config.headers.Authorization = `Bearer ${session?.accessToken}`;
  //   }
  //   return config;
  // });
  // useEffect(() => {
  //   const requestIntercept = axios.interceptors.request.use(
  //     (config) => {
  //       if (!config.headers.Authorization) {
  //         config.headers.Authorization = `Bearer ${session?.accessToken}`;
  //       }
  //       return config;
  //     },
  //     (error) => Promise.reject(error),
  //   );

  //   const responseIntercept = axios.interceptors.response.use(
  //     (response) => response,
  //     async (error) => {
  //       const prevRequest = error.config;
  //       if (error.response?.status === 401 && !prevRequest?.sent) {
  //         prevRequest.sent = true;
  //         await refreshToken();
  //         prevRequest.headers.Authorization = `Bearer ${session?.accessToken}`;
  //         return axios(prevRequest);
  //       }
  //       return Promise.reject(error);
  //     },
  //   );

  //   return () => {
  //     axios.interceptors.request.eject(requestIntercept);
  //     axios.interceptors.response.eject(responseIntercept);
  //   };
  // }, [session, refreshToken]);

  return axios;
};

export default axiosAuth;

const BASE_URL = '';

function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

interface Post {
  title: string;
  status: string;
}

function get<T>(url: string): Promise<T> {
  const fullURL = BASE_URL + url + '.json';

  return wait(300)
    .then(() => fetch(fullURL))
    .then(res => res.json());
}

export function getPosts(): Promise<Post[]> {
  return get<Post[]>('/posts');
}

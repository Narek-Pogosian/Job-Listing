export type SearchParams = { [key: string]: string | string[] | undefined };

export function objectToParamsString(params: SearchParams) {
  return Object.entries(params)
    .map((param) => `${param[0]}=${param[1]}`)
    .join("&");
}

/**
 * @returns a string with full pathname and query params, can be used with router.push and Link
 */
export function setSearchQueries(values: Record<string, any>) {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(values).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
  });

  return `${window.location.pathname}?${searchParams.toString()}`;
}

export function setPage(page: number) {
  const searchParams = new URLSearchParams(window.location.search);

  if (page <= 1) {
    searchParams.delete("page");
  }
  if (page > 1) {
    searchParams.set("page", page.toString());
  }

  return `${window.location.pathname}?${searchParams.toString()}`;
}

export function setNextPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = searchParams.get("page");

  return setPage(currentPage ? Number(currentPage) + 1 : 2);
}

export function setPreviousPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = searchParams.get("page");

  return setPage(currentPage ? Number(currentPage) - 1 : 1);
}

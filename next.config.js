module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-custom-header",
            value: "my, custom, header, value",
          },
          {
            key: "Content-Range",
            value: "bytes 200-1000/67589",
          },
        ],
      },
    ];
  },
};

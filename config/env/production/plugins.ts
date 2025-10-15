export default ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {
                    folder: 'strapi-uploads',
                    use_filename: true,
                    unique_filename: false,
                    overwrite: false,
                    secure: true,
                },
                uploadStream: {
                    folder: 'strapi-uploads',
                    use_filename: true,
                    unique_filename: false,
                    overwrite: false,
                    secure: true,
                },
                delete: {},
            },
        },
    },
});

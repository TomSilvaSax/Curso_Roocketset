import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import {converteHorasMinuto} from './utils/converte-horas-minuto'
import { converteMinutoHoras } from './utils/converte-minutos-horas'
const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()

// HTTP methods /API RESTful / HTTP Codes

// GET, POST, PUT, PATCH, DELETE

app.get('/games', async (request, response) => {
    // Listagem de games com contagem de anuncios

    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })
    return response.json([games]);
});

app.post('/games/:id/ads', async (request, response) => {
    // criacao de novo anuncio

    const gameId = request.params.id;
    const body: any = request.body;

    const ad = await prisma.ad.create({

        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: converteHorasMinuto(body.hourStart),
            hourEnd: converteHorasMinuto(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    })


    return response.status(201).json(ad);
});

app.get('/games/:id/ads', async (request, response) => {
    //listagem de anuncios por game
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select:
        {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },

        where: {
            gameId,
        },

        orderBy: {
            createAt: 'desc',
        }
    })

    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: converteMinutoHoras(ad.hourStart),
            hourEnd: converteMinutoHoras(ad.hourEnd)
        }
    }))
});

app.get('/games/:id/discord', async (request, response) => {
    // Buscar discord pelo ID do anuncio

    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId,
        },
    })

    return response.json({
        discord: ad.discord,
    })
});

app.listen(3333)